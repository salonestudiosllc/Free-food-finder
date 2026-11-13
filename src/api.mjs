const json=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function api(request,fetcher=fetch){
const u=new URL(request.url);if(request.method!=='GET')return json({error:'Method not allowed.'},405);
try{
let target;
if(u.pathname==='/api/geocode'){
 const q=(u.searchParams.get('q')||'').trim();if(q.length<8||q.length>100)return json({error:'Enter a street address with city and state (8–100 characters), or use a ZIP code.'},400);
 target=new URL('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress');target.search=new URLSearchParams({address:q,benchmark:'Public_AR_Current',format:'json'}).toString();
 const response=await fetcher(target,{signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('Address lookup is unavailable. Please try a ZIP code.');
 const data=await response.json();if(!Array.isArray(data.result?.addressMatches))throw Error('Address lookup returned an unexpected response. Try a ZIP code.');
 const matches=data.result.addressMatches.filter(m=>m.coordinates&&Number.isFinite(m.coordinates.y)&&Number.isFinite(m.coordinates.x)&&Math.abs(m.coordinates.y)<=90&&Math.abs(m.coordinates.x)<=180).slice(0,10).map(m=>({lat:m.coordinates.y,lng:m.coordinates.x,label:m.matchedAddress}));return json({matches});
}
if(u.pathname==='/api/food'){
 const zip=u.searchParams.get('zip'),lat=u.searchParams.get('lat'),lng=u.searchParams.get('lng');
 if(zip){if(!/^\d{5}$/.test(zip))return json({error:'Enter a five-digit U.S. ZIP code.'},400);target=new URL('https://feedam.org/api/resources/search');target.searchParams.set('zip',zip)}
 else{if(lat===null||lng===null||!lat.trim()||!lng.trim()||!Number.isFinite(Number(lat))||!Number.isFinite(Number(lng))||Math.abs(Number(lat))>90||Math.abs(Number(lng))>180)return json({error:'A valid ZIP code or location is required.'},400);target=new URL('https://feedam.org/api/resources/nearby');target.searchParams.set('lat',lat);target.searchParams.set('lng',lng)}
 for(const[k,v]of Object.entries({mode:'free',radius:'5',limit:'100'}))target.searchParams.set(k,v);
 const response=await fetcher(target,{signal:AbortSignal.timeout(25000)});if(!response.ok)return json({error:response.status===429?'The directory is busy. Wait a moment and try again.':'The food directory is unavailable. Please retry or use another directory below.'},response.status===429?429:503);
 const data=await response.json();if(!Array.isArray(data.resources)||data.success===false)return json({error:'Location was not found, or the directory returned an unexpected response. Try another ZIP.'},502);return json(data);
}
return json({error:'Not found.'},404);
}catch(e){return json({error:e.name==='TimeoutError'?'Search timed out. Please retry or use a ZIP code.':e.message||'Search unavailable.'},503)}
}
