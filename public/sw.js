console.log('registered')

let cacheData = 'appv1'

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/static/js/main.chunk.js',
                '/favicon.ico',
                '/logo192.svg',
                '/index.html',
                '/'
            ])
        }).catch(error => {
            console.log('error', error)
        })
    )
})

this.addEventListener('fetch', e => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then((result) => {
                if (result) {
                    return result
                }
            })
        )
    }
})
