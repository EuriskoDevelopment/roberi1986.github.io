'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0c9d88a2b36bffcc80fa78e0ea47fded",
"/": "0c9d88a2b36bffcc80fa78e0ea47fded",
"main.dart.js": "259cd3a66150be155885691c788d6395",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "143d9f014f24b4923c77212d3407cbd7",
"assets/ground3.png": "024315910ad4e3c7a280a819c2defd6c",
"assets/ground2.png": "b37767a7e70db745fedc367b8eeabcb5",
"assets/ground1.png": "3917c875d2411277df75fe2b0ed465b2",
"assets/ground4.png": "cc99451fc17d2813ddcdd180fb94a7cc",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/IMG_0249.jpg": "9935a40f48934273737df865c06cf4c6",
"assets/web/assets/ground3.png": "024315910ad4e3c7a280a819c2defd6c",
"assets/web/assets/ground2.png": "b37767a7e70db745fedc367b8eeabcb5",
"assets/web/assets/ground1.png": "3917c875d2411277df75fe2b0ed465b2",
"assets/web/assets/ground4.png": "cc99451fc17d2813ddcdd180fb94a7cc",
"assets/web/assets/IMG_0249.jpg": "9935a40f48934273737df865c06cf4c6",
"assets/web/assets/Flutter_back.png": "20eb41f272fb3f3448e878a7eb0d4566",
"assets/web/assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/web/assets/back.jpg": "fe64b95dbe39dca3dc0c11caad97e884",
"assets/AssetManifest.json": "a22200216828a6b1c68ff3013aafbf03",
"assets/Flutter_back.png": "20eb41f272fb3f3448e878a7eb0d4566",
"assets/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/back.jpg": "fe64b95dbe39dca3dc0c11caad97e884"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
