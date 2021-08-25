const version = 'appv1'

const cacheFiles = [
    'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap',
    '/static/css/main.a7842a67.chunk.css',
    '/static/js/main.40ef5f63.chunk.js',
    '/static/js/main.1d46bdfd.chunk.js',
    '/static/js/2.11a1e67d.chunk.js',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/'

]

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(version).then(cache => {
            return cache.addAll(cacheFiles)
        })
    )
})

this.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true,
};

this.addEventListener('fetch', event => {
    if (!navigator.onLine) {
        event.respondWith(
            caches
                .match(event.request, options)
                .then((response) => {
                    if (response) {
                        return response || fetch.response;
                    }
                })
                .catch((err) => {
                    console.log('err', err);
                })
        );
    }
});