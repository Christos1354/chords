/* Συγχορδίες – works without internet. 26-10-2026 */
const C='akordes-v2', BIGC='akordes-big';
const F=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
const BIG=['btc-model.js','ort.wasm.min.js','ort-wasm-simd-threaded.mjs','ort-wasm-simd-threaded.wasm','vocals.fp16.onnx','accompaniment.fp16.onnx'];
const isBig=u=>BIG.some(n=>u.pathname.endsWith('/'+n));
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==BIGC).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin && isBig(u)){
    // the big AI files never change: take them from the computer, download only once
    e.respondWith(caches.open(BIGC).then(c=>c.match(u.href).then(m=>m||fetch(req).then(r=>{ if(r.ok) c.put(u.href,r.clone()); return r; }))));
    return;
  }
  if(u.origin!==location.origin) return;            // YouTube etc.: straight from the internet
  e.respondWith(fetch(req).then(r=>{ if(r.ok){ const cp=r.clone(); caches.open(C).then(c=>c.put(req,cp)); } return r; }).catch(()=>caches.match(req,{ignoreSearch:true}).then(m=>m||caches.match('./index.html'))));
});
