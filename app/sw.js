const CACHE_STATIC_NAME = "static";
const CACHE_DINAMYC_NAME = "dinamyc";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then((cache) => {
            return cache.add(new Request("offline.html", { cache: "reload" }));
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DINAMYC_NAME) {
                        return caches.delete(key);
                    }
                }));
            })
    );

    return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((res) => {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request)
                        .then((res) => {
                            return caches.open(CACHE_DINAMYC_NAME)
                                .then((cache) => {
                                    cache.put(event.request.url, res.clone());
                                    return res;
                                });
                        })
                        .catch((err) => {
                            return caches.open(CACHE_STATIC_NAME)
                                .then((cache) => {
                                    if (event.request.headers?.get("accept")?.includes("text/html")) {
                                        return cache.match("offline.html");
                                    }
                                });
                        });
                }
            })
    );
});
