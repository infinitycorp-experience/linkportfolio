self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through simples para habilitar instalação PWA
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
