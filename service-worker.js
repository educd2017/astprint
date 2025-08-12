self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('printast-pwa-v1').then(cache => {
      return cache.addAll([
        'https://www.printast.top',
        'https://www.printast.top/?m=1',
        'printast.top/?m=1',
        '/p/products.html?m=1',
        '/2025/08/eltakhrg.html?m=1',
        '/p/client-review.html?m=1',
        '/p/about.html?m=1',
        '/p/faq.html?m=1'
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
