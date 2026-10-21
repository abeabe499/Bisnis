/* Service worker sederhana: syarat agar bisa dipasang. Tidak menyimpan data aplikasi. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* biarkan jaringan menangani */ });
