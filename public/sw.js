let cacheData="app-static-v2";
let dynamivCacheData="app-dynamic-v1";



// async function precache () {
//     return caches.open(cacheName).then(function (cache) {
//         return cache.addAll([
//            
//         ]);
//     });
// }
// self.addEventListener('install', function(event) {
//     event.waitUntil(precache());
// });

self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then(function (cache) {
        return cache.addAll([
           "/",
           "/static/js/bundle.js",
           "/static/js/installHook.js",
           "/static/media/Group_7_Copy.badbf78cee8325dc89d12d5bb5d4fdcf.svg",
            "/static/media/antivirus-banner.aca8955fff13476138b4.png",          
              "/static/media/ic_account_circle.ed84db189c78e84a866d42621917b089.svg",
           "/static/media/Gilroy-Medium.2496719b988730a45aeb.ttf",
           "/static/media/Gilroy-Bold.c6ec2c14b5c3d6957958.ttf",
           "/static/media/Muli-Regular.cb127887ffe421398606.ttf",
           "/static/media/ic_menu.0c0352934d4616384d93b8ca61f9345b.svg",
           "/static/media/Group_17_Copy.99b6633e373911c29acd0f444035b8b8.svg",
           "/static/media/main-banner-browser.1c1ae5663ebc967cf02a.svg",
           "/static/media/Group_98_Copy_2.d3aad9a6a2421c03cd87057732e07335.svg",
           "fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js",
           "/static/media/Group_47.566710979a4e5df3b7397806e0c00128.svg",
           "/static/js/main.chunk.js",
           "/static/js/0.chunk.js",
        ])
     }) )
})

self.addEventListener('activate', function (event) {
    console.log("hello")
    event.waitUntil(
       self.clients.claim(),
      caches.keys().then(function (cacheNames) {
   
        return Promise.all(
            cacheNames.map(function(cacheName) {
                console.log(cacheNames)
                if (cacheData !== cacheName && cacheName!==dynamivCacheData) {
                  return caches.delete(cacheName)
                }
            }
            )
      )}
    ))
    return self.clients.claim()
  }
  
  )

  

  self.addEventListener("fetch",(event)=>{
    if(!navigator.online){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    return result
                }
                return fetch (event.request)
                .then(function (result){
                    return caches.open(dynamivCacheData).then (function(cache){
                        cache.put(event.request.url,result.clone())
                        return result
                    })
                })
              
                // let requestUrl=event.request.clone();
                // return fetch(requestUrl)
            })
        )
    }
  
})

self.addEventListener("message", function (event) {
    if (event.data.action === "skipWaiting") {
      self.skipWaiting()
    }
  })


