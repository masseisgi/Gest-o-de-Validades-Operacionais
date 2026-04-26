self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
self.addEventListener('fetch', e => {
  if (e.request.url.includes('/api') || e.request.url.includes('.netlify')) return;
});
