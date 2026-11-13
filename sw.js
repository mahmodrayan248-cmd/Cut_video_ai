/* قصّاص: service worker. التطبيق بيشتغل أونلاين بس: ما في تخزين للأوفلاين، وبينمسح أي كاش قديم. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('qassas')).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
const OFF='<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>قصّاص</title><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0a141c;color:#fff;font-family:sans-serif;text-align:center;direction:rtl"><div style="padding:24px"><div style="font-size:54px">📡</div><h2>لازم تكون متصل بالنت</h2><p style="opacity:.7">قصّاص بيشتغل بس مع اتصال بالإنترنت.</p><button onclick="location.reload()" style="padding:12px 28px;border:0;border-radius:12px;background:#2f9bff;color:#fff;font-size:16px">إعادة المحاولة</button></div>';
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate')e.respondWith(fetch(e.request,{cache:'no-cache'}).catch(()=>new Response(OFF,{headers:{'content-type':'text/html;charset=utf-8'}})));
});
