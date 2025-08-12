self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('printast-pwa-v1').then(cache => {
      return cache.addAll([
        '/',
        '/p/products.html',
        '/2025/08/eltakhrg.html',
        '/p/client-review.html',
        '/p/about.html',
        '/p/faq.html',
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
