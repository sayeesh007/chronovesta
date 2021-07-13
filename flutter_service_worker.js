'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "80241d1e21db04725f7563b3723b03c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "090a35b888be4a5f88c9019bae2e2061",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9b7c41f88001effab5c69af545b46da",
".git/logs/refs/heads/main": "dcc79c8d1900b4336fe2b7bf76b9a42d",
".git/logs/refs/remotes/origin/main": "52d1fdeaa3da17ce730aedbcfa5d6e3f",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/03/07470bf6269659e318cc4653eeb8173855d1fc": "20859b02437cc4c188f8450abba5c4d7",
".git/objects/09/4406ab57005c5cbadac187cebf5bab7d024401": "441181096c55467f164c435936a394cc",
".git/objects/10/4b7186fad89713111087abd1a2fc24d9bd9729": "7957e7c2122105bbb54b837a13274731",
".git/objects/10/9397a932f96cccc7fd5221ed7ec5ccf2149dba": "0055aa67937f60c5abcbaf0cae46d651",
".git/objects/14/281e96391b898ba24d0cf114533120e1583120": "a1db126fa947b71700d8c1e8dd643eca",
".git/objects/1c/a9148deba3528ca7e6bb4dcfc9b6894d4dd091": "471a8ade98b44b2a871ea70c4bf3df1b",
".git/objects/1e/70774b09fed4b985fec52cc52e5dc2bb3d8492": "62664c756a1771f4c42624050cca238f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/060e6a0a8c600cadbea783c2f43f1112645038": "7ad9d6d4ee58f21ff3fffb3a4ff152b6",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/2d/202dea834e474f2545d62521b2aeedc3762a96": "616427caef172c185fbf9ccb5da72dab",
".git/objects/2e/9f32a6a253d534a3e0a40b69081182ab5ecc75": "89a21e69b7041e7292ce4914e2096f9a",
".git/objects/31/f99217b80efd659ae62f9778de8111943f2041": "a5ed5319b7c881cbb7c4315e37c79cc5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/ddbc312f88eee004bfb78ea2dce7affa70111b": "06d71baab167209f44d4f75475acf6e2",
".git/objects/3a/4ec87d57e1f3a9b12aaabf5f0dc910becd9fb5": "ecc77f35ff09871e0c3fa3f441d9493c",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/67/5fc383e5259b0f8176b621649af1ee5d1824dd": "8b0903ed1b2336939fcbaa322022da13",
".git/objects/71/b3af66c29c8939c40059df26bcc3f28fe11e5c": "7e944c8c301f7bdbb7ed7982b64c8671",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/ac036f6fde6920a3e87210f409b26454ff6a79": "01b2273e730195811dbf615d2b729ebd",
".git/objects/97/9500c883164f695966ec378c1a47f41879accd": "02be2275468b6630a33ec974aefe6732",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/aa64be2856ccfb4318f696def20e7388d33c00": "372c64a826883225a2d296d6bb4c3d44",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b6/63b6c4fd1fd362d257faf0d6fed6dc7e08d459": "24af130ff085ff28d0efdb297453834c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d81e8399794a2a72a4c63a1a61c320df2e234f": "e6d670710facdd7995e4f4346de59955",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/18893f8b463aabe7ad1ad3f6eb5acca0f61a1a": "1597f21622847d5b371f5378e17a913d",
".git/objects/ee/3a0ef2a6a70a71a0f21a4055df9b53944e01e0": "e4e579a2f552116f31d860a3e7a5816c",
".git/objects/f4/05ed8ae2b4c4ed7f2ad3e2391092ba108d2adf": "76c224e4802f6256cd60a76c89fe7926",
".git/refs/heads/main": "bb9b7e21dd9ed0d5b8f7b4175df1c374",
".git/refs/remotes/origin/branch": "abd783dc6b607038259dee8b049345cf",
".git/refs/remotes/origin/demo": "abd783dc6b607038259dee8b049345cf",
".git/refs/remotes/origin/main": "bb9b7e21dd9ed0d5b8f7b4175df1c374",
".git/refs/remotes/origin/web": "abd783dc6b607038259dee8b049345cf",
"assets/AssetManifest.json": "6ca399869c1bfc643f1e99355f9fcfb3",
"assets/assets/images/30s.png": "289052957565bbd0697536ea07095776",
"assets/assets/images/background.png": "74a779e652468fca94a63309632f85b8",
"assets/assets/images/basu.jpeg": "0a220cd6cfd23c7237c025b00d1690e4",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/ecom.png": "841f20cb86a7a794ec5a37dbe2089282",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/logo.png": "1e18dd38f77a6dd66584554b89363191",
"assets/assets/images/manoj.jpeg": "f0f54bd70cd6cd8da4819989c583d6d7",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/prateek.jpeg": "0919ab87472144419d89d753b8a146f1",
"assets/assets/images/sayee.jpeg": "ff629fe07a96831c6b08065685a7595b",
"assets/assets/images/sayeesh.jpeg": "92e7799d1234bf5ff22f6fad3ffb18f7",
"assets/assets/images/shiva.jpeg": "3537e5db726e6f564647192138e6700d",
"assets/assets/images/shop.png": "f61037c778a9fd5e6a7bbbf5455b0cc6",
"assets/assets/images/shukil.jpeg": "7143741294efb26d4cfdbeb34cc9e7af",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fdb932d0c5b4b9b38df7746d616e3446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cfbc7304a545cf08084db6a8a365c312",
"/": "cfbc7304a545cf08084db6a8a365c312",
"main.dart.js": "4a0b514f96b32e5acd206d48cbd300b3",
"manifest.json": "11f7cafbed48339b261e3835baea58b7",
"version.json": "b48227b1596e9064b705d7f4a6a8759f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
