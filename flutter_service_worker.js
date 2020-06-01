'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b9ac16c0cf7fb2f5cca5e5660dd02e18",
"/": "b9ac16c0cf7fb2f5cca5e5660dd02e18",
"main.dart.js": "713f593ad2cf5d9a6660dc08ca1fbaaf",
".git/config": "f216a9d87d28cf0b5b1bc784b42e687d",
".git/objects/6f/b053d900c596bd555839be5d4ae50c3408c773": "40e48080b103060fa367eb258cee0045",
".git/objects/6a/5f1b9d2000c294afe3cabdd99f894c3460668a": "8c4b7c5639142cddd9167a6f655195b6",
".git/objects/51/f7f83b0eb12db7f499e2c2af59d2cc7c2afbdb": "0feef12f8d6d07457ba1e5b6cfcf2a84",
".git/objects/58/4fa6a4fd84da30c5c8bb1bc5297dd5155cd5e8": "b5f616077203e1f7ba5446a05b70c59a",
".git/objects/05/c14f08e6f1b16222052ef5bcbd6980bee97294": "977aecb21166ca139378a9052b602642",
".git/objects/df/caf863d2d6e2fd865f975dfe0ac1e44d994680": "036827737d952080677a6d21917b62fb",
".git/objects/a2/2f9744215e73ee5967cba507495b566f59da3d": "eb1a51de4967c280ddb961ab03452f25",
".git/objects/f4/b01f6ce4756a91aa94d84bb42f793655d7b384": "7e9ee9a0c2960db29d04c9a2f567369b",
".git/objects/eb/e458fd9f2b04853b441a34c233d78b8e08755a": "d72814ba0345bf039805ed6414001519",
".git/objects/ed/57490a26bd64e2eaa6d706ecb5c42abefa6a94": "e55d64a3d450bad1e87a1bd3ea480a9c",
".git/objects/c6/f2372ae77f3fb12fa3f343a7cfe05b61d0730f": "b5e348517de1b916729c8d9910c5c1cd",
".git/objects/20/a9ab35af697b398fc4da3f2d00199eebe691e5": "bd6468b4f65163404bff8cd2e186cd41",
".git/objects/7c/48722912b6c3896837d6596eb68d15d497dd1e": "1fc7d37cf513ee4575e9fd4b10a3ce8d",
".git/objects/16/650fe23724fc2dcb91356d85a87495e57bb6f1": "0becf3c5286bb2c2375e3966345937a9",
".git/objects/45/ab6611b0b9af7352dc73b2556eb5ac5f397338": "005de625de149ee5be1944cde364de7a",
".git/objects/10/aac7eba3e688c84d625b9e6f47416dce57a923": "fef262bb06f46d949112c243bf0f0189",
".git/objects/43/d508d9ae8975a3ed5a513dcbf62cdd1ff1bf5d": "649683b258025b60d41d4b0c27e730f4",
".git/objects/6b/0f11ac13298f70618f4c4cff6dfe7432bc2996": "6ad96d8d28c04e7c9dbc3824174930ad",
".git/objects/6b/e0c7475a9680309963f9a60b48a2cee8e8d535": "5c00a90e796d0194f3902f4ccbf977dd",
".git/objects/09/15b954f857bd6b707d612aba38d96655b25543": "6a420627c186442d5913a85cee6501d8",
".git/objects/96/7239d0d3e80925bdcff07f5a918522c2b4e4ae": "686c4952f22b93fb7d1f619637c91173",
".git/objects/53/0f876b3407a51f51112c69d3101b1e9c14c81e": "8838c1fc06d76b5a0ce7cf4569acdd36",
".git/objects/5e/debc86c55a045664ec91677473bfe6dfe86f2d": "d9020b60ec28bc9ffde475aba0f6f1bd",
".git/objects/0a/71dfd3abf55b5282d30e8e874ec0efb14f1b80": "297d57b921e47acd1ede1f7ac145f366",
".git/objects/d3/5bef8003f5ab587c49d7197ee7509020a48c7b": "2e7cc7c15a2526928943f06759bb19e3",
".git/objects/af/2647a8e2779de4f20bb79f853ee546d42651fd": "ceedb111e920092e6e454990632c4779",
".git/objects/e1/049254a973e1e54df9ca4f9ca92230f31c780a": "b606ab7c174bbe27d8de195b3925412f",
".git/objects/2d/a9a90e08cbcb4ab04bb6012c60cee9761da1a9": "25f3f4802da0b73c1db93f78900026c6",
".git/objects/71/e65892d7c2604df2e5eaeda753a1b7cab5a34b": "8242f818084da3f16f5b31313346eb9b",
".git/objects/82/cc13ee8be1bc1d84eac4ba60f2a0e946e9183b": "15267abfaa66f056fb7e510cec9454c8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "051c0aab5a112e08345e40e4713f04c6",
".git/logs/refs/heads/master": "051c0aab5a112e08345e40e4713f04c6",
".git/logs/refs/remotes/origin/master": "60d4361f5c676f5247ff9eba4038c96a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2c1f6c997c9092fa2bc1d4fc7a555323",
".git/refs/remotes/origin/master": "2c1f6c997c9092fa2bc1d4fc7a555323",
".git/index": "da75b41ff0ad29caafeb6e2c46b5ba42",
".git/COMMIT_EDITMSG": "45b7a24e2bff2f2c9007c62d23fcae8e",
"assets/ground3.png": "024315910ad4e3c7a280a819c2defd6c",
"assets/ground2.png": "b37767a7e70db745fedc367b8eeabcb5",
"assets/layer3.png": "978a410e8539d70eff59dd8fa8b18d02",
"assets/ground1.png": "3917c875d2411277df75fe2b0ed465b2",
"assets/layer2.png": "31096a6fe20c5639d85531c526f688a9",
"assets/ground4.png": "cc99451fc17d2813ddcdd180fb94a7cc",
"assets/LICENSE": "59844a026d05c04ff832a90250bb1baa",
"assets/profile_big.jpg": "a4a5c7112e0a313a128d0d8496eee45e",
"assets/layer4.png": "d1b34296fa3d69dbbf44acee7d6f131d",
"assets/IMG_0249.jpg": "9935a40f48934273737df865c06cf4c6",
"assets/web/assets/ground3.png": "024315910ad4e3c7a280a819c2defd6c",
"assets/web/assets/ground2.png": "b37767a7e70db745fedc367b8eeabcb5",
"assets/web/assets/layer3.png": "978a410e8539d70eff59dd8fa8b18d02",
"assets/web/assets/ground1.png": "3917c875d2411277df75fe2b0ed465b2",
"assets/web/assets/layer2.png": "31096a6fe20c5639d85531c526f688a9",
"assets/web/assets/ground4.png": "cc99451fc17d2813ddcdd180fb94a7cc",
"assets/web/assets/profile_big.jpg": "a4a5c7112e0a313a128d0d8496eee45e",
"assets/web/assets/layer4.png": "d1b34296fa3d69dbbf44acee7d6f131d",
"assets/web/assets/IMG_0249.jpg": "9935a40f48934273737df865c06cf4c6",
"assets/web/assets/trees-1.png": "2d4896b82064b8a8129dfce6c7e01b0f",
"assets/web/assets/Flutter_back.png": "20eb41f272fb3f3448e878a7eb0d4566",
"assets/web/assets/sun-1.png": "4a363d3b1bbd1b094362bc0362cda073",
"assets/web/assets/layer3-1.png": "0846ed07ea62eae5b7de8fc66c5074d7",
"assets/web/assets/profile.jpg": "5cdb7eb2ddcb9fcec4dc3fadff2b6c1f",
"assets/web/assets/IMG_0546.png": "1aae3c8baae06a84a58ecc1b7fd1cf84",
"assets/web/assets/havet.jpg": "d46d5a366d69227416f1cc4a41e1f1ff",
"assets/web/assets/sun.png": "399b3e4e1878650c62f60c9f07fbddfc",
"assets/web/assets/layer4-1.png": "4f2993f84da5e698a9e1e1a0fece819b",
"assets/web/assets/trees.png": "51097c79d3d7b218f1470d381ac6d208",
"assets/web/assets/back.jpg": "fe64b95dbe39dca3dc0c11caad97e884",
"assets/web/assets/layer2-1.png": "d22d44d2e75c3368cfd19e6ac79a43b8",
"assets/trees-1.png": "2d4896b82064b8a8129dfce6c7e01b0f",
"assets/AssetManifest.json": "d000c6738f3ace86a20cf8b9324949aa",
"assets/Flutter_back.png": "20eb41f272fb3f3448e878a7eb0d4566",
"assets/sun-1.png": "4a363d3b1bbd1b094362bc0362cda073",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/layer3-1.png": "0846ed07ea62eae5b7de8fc66c5074d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/profile.jpg": "5cdb7eb2ddcb9fcec4dc3fadff2b6c1f",
"assets/IMG_0546.png": "1aae3c8baae06a84a58ecc1b7fd1cf84",
"assets/havet.jpg": "d46d5a366d69227416f1cc4a41e1f1ff",
"assets/sun.png": "399b3e4e1878650c62f60c9f07fbddfc",
"assets/layer4-1.png": "4f2993f84da5e698a9e1e1a0fece819b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/trees.png": "51097c79d3d7b218f1470d381ac6d208",
"assets/back.jpg": "fe64b95dbe39dca3dc0c11caad97e884",
"assets/layer2-1.png": "d22d44d2e75c3368cfd19e6ac79a43b8"
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
