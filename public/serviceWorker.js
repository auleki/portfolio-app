let CACHE_NAME = `my-site-cache-v1`
const urlsToCache = ['/', '/index.html']
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened Cache')
      return cache.addAll(urlsToCache)
    })
  )
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)).then(response =>
    response ? response : e.request
  )
})
