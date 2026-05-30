const CACHE = 'activador-pm-v1';
const FILES = [
  '/activador-pinturerias/activador_pinturerias-1.html',
  '/activador-pinturerias/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
