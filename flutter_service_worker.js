'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"index.html": "8881366987038023f04c38426b1fe6fc",
"/": "8881366987038023f04c38426b1fe6fc",
"flutter_bootstrap.js": "70ff3aedc2a824c7af18f2032b479841",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"assets/fonts/MaterialIcons-Regular.otf": "2f5e576b75a0c2f277ae43ab519c659f",
"assets/AssetManifest.bin": "4242ba5b743e462f7e88146cad69e2b9",
"assets/NOTICES": "c4aa0561c31c91f0493f3864770c14b3",
"assets/assets/images/icon2.png": "42b488b894d98af0208c6f5406f702d0",
"assets/assets/images/food_check_2.png": "acd579e13324846a3be1f09e649308dd",
"assets/assets/images/reset_pswd.svg": "964c61f4a9d5761a4d9f1cf070c3e39e",
"assets/assets/images/food_check_1.png": "e7d91d0428a4159a10d0c6489ec4491d",
"assets/assets/images/filter_dot.svg": "30b4a38c4dedef2237fbc0b231f9d463",
"assets/assets/images/camera_icon.svg": "a2c47d7cedb526257af4240d8a68ac97",
"assets/assets/images/mark_email.svg": "0ecd3b3e7ab412c582493cf4ca8f5de8",
"assets/assets/images/radio_icon.svg": "c6f83b569e26f66a2a8925c657a97fcb",
"assets/assets/images/banner.png": "7cc9d014de61b7a2b6346d9539ede522",
"assets/assets/images/profile_icon.svg": "1838e0c218c5f1f34f4c5ae745cd936b",
"assets/assets/images/filter_icon.svg": "af5f1cf46e89747f3537ca0298bef044",
"assets/assets/images/more-ellipsis.svg": "22f4e263df7f8232bfd00f4895f6312a",
"assets/assets/images/clock.svg": "a56a9ad87500e65918d9ddc323949d00",
"assets/assets/images/food_cross_1.png": "41611c799e624049a1e37979a5dc3dc9",
"assets/assets/images/open_email.svg": "415dff9ccc4e95ac49d6695b128cba5f",
"assets/assets/images/down_arrow.svg": "af1123e3d8a462afbe63ec1fce69773d",
"assets/assets/images/home_icon.svg": "e840f0fe67032cc5ee58b734bafec645",
"assets/assets/images/chevron_forward.svg": "3c1007e673bf3ce4430e48bf412ca28e",
"assets/assets/images/otp_icon.svg": "ffd3779cbfe04d3fe91daad7eb167de3",
"assets/assets/images/search_icon.svg": "0b5de9325f2008edcfed65c8bb488b7d",
"assets/assets/images/cross.svg": "856d76df66e2399e890712c4ba20dac8",
"assets/assets/images/splashs.png": "6fa78eb812a09681766928c175b27ad1",
"assets/assets/images/nonveg.svg": "8ac2c93e2da3b7f4d65f4256987258cf",
"assets/assets/images/image_21.png": "5530a8f88b84143fc985a1a009168143",
"assets/assets/images/onboard_image.png": "e57ee11448fc572bd4ece0d93e58a88a",
"assets/assets/images/arrow_up.svg": "bf02633c7d53f6c0da03166901e38081",
"assets/assets/images/image1.png": "0abc4afa8006f761bb210a89793a67c9",
"assets/assets/images/stats_icon.svg": "6479ae8d2be0f34d04dbae1586be27e6",
"assets/assets/images/success_order.svg": "1c157db8316a9efb36e664258d723b33",
"assets/assets/images/image_22.png": "3800a18d1fb12c99560fbfed4d84cf50",
"assets/assets/images/delete_icon.svg": "4b312229c666bfce8cf786ce8c03af14",
"assets/assets/images/image_20.png": "ab2ae50a32cd2baebdd6cee507374bda",
"assets/assets/images/food_cross_2.png": "2a005d43b3a5e63b2f299c6f12d85c12",
"assets/assets/images/list-bullet.svg": "38bbabded5ac203a17b084cc17166669",
"assets/assets/images/check.svg": "3b92fcaaa714e98ec52142d5c9ba9b87",
"assets/assets/images/icon1.png": "670bee137a2e53d2600581c05cbe0094",
"assets/assets/images/calender.svg": "7b17d211c70df51a21b0f119d5dd1713",
"assets/assets/images/up_arrow.svg": "03efa21bb5a7edba6e19d4f42a487d06",
"assets/assets/images/upload_arrow.svg": "87705d0ca3692be5aff756df8352efa8",
"assets/assets/images/qr_icon.svg": "aaf8e579e06d1937022eba7c8fb0dda7",
"assets/assets/images/image_23.png": "b3d17cad77d7f6ece5459c037563249c",
"assets/assets/images/file_frame_icon.svg": "5b56547ff88462260571bc7a2f2eb60e",
"assets/assets/images/order_fork_icon.svg": "4fb224292313190c49626f99be6071f8",
"assets/assets/images/veg_food_icon.png": "a787fe5b8d5da94dba228353e5fb0476",
"assets/assets/images/scan_vector.svg": "d523d873a39fa42ab09002ae950a9abd",
"assets/assets/images/circle_cross.svg": "78c44cd1642a7aebc7e7148ad17b97c6",
"assets/assets/images/menu_more_icon.svg": "6a6845794b74bdf240cffdc7f7d62d44",
"assets/assets/images/info_circle.svg": "6f275ea3e8e488abb18d349747b28190",
"assets/assets/images/help_icon.svg": "08bae621d1910d3490298a6991c37be1",
"assets/assets/images/menu_ic.svg": "b3f443adc02fd41f9b0815228976b860",
"assets/assets/images/icon_ord.svg": "05cf3cf151dc6b44e710ca76ddb4cabb",
"assets/assets/images/inventory_icon.svg": "647ac02ae038db22073cc51f8175b90a",
"assets/assets/images/arrow_down_icons.svg": "26b1de75c920718a2e054e4fe20673cd",
"assets/assets/images/no_data_icon.svg": "4f88f0998e1656baf7b7436ef79c6b7e",
"assets/assets/images/food_cross_3.png": "062325720ce49369229ebef94ba6553e",
"assets/assets/images/add_icon.svg": "b6b7ddc2aaa69bce5db5386c72287a27",
"assets/assets/images/Container.svg": "b90bd893777e1398ec28873d1552811f",
"assets/assets/images/info_icon.svg": "bd843b4715679391c81d9817c88ebbc1",
"assets/assets/images/bus_icon.svg": "c79bfb6d03a4da1fb8bef628a29a4445",
"assets/assets/images/circle_check.svg": "8a72fe22091d9fc5b137a1eb1bd727a0",
"assets/assets/images/logo.png": "4889dbda3a2aacf80db8cbbeccbe9b1d",
"assets/assets/images/validate_number_icon.svg": "1993e3c3e6e1ab153ada279849990f57",
"assets/assets/images/image_24.png": "5880df33612b01efdb3e866b7ba7fd7c",
"assets/assets/images/deactivate_user.svg": "396954e80a2ad215440fbd440392024f",
"assets/assets/images/back_arrow.svg": "ca66a84a1a0c3ad5b7cf35dea9cdb86a",
"assets/assets/images/step2_icons.png": "a371e2acb28dd728ab1bb2a3e3a02d71",
"assets/assets/images/veg_icon.svg": "67cb6fd1dffe150a469c78d20c4fcf09",
"assets/assets/images/people.svg": "7df4a3328513626eb0e878850738db2b",
"assets/assets/images/edit_icon.svg": "9090f86d9dbd0720a634bc630c5d9980",
"assets/assets/images/food_check_3.png": "4d8c5a5a7ef061b595a065aaf6d0815f",
"assets/assets/images/down_arrow_icon.svg": "d6ceae59e81ef497775130a8261ff60e",
"assets/assets/images/success_check.svg": "3909c4904b4a4d38a60574aeaa165f93",
"assets/assets/images/bus.svg": "1e522554a62f959340178ce387c5ca18",
"assets/assets/images/edit_pen.svg": "6f4c8b70d7cda7dd1985bb83ba1e51c9",
"assets/assets/images/step3_icons.png": "e4f3de114b175f2304e09db8106677f2",
"assets/assets/images/check_success.svg": "c775c0d8f5deabe5a48324415258d679",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "7db6e00315aecd3718a2db764f2f8720",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"manifest.json": "e83d005b292410e2e5dd85cbbccb6166",
"version.json": "0d84331ec7a6f45cbd5805f5abc64b45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "3d743c0670e88a1e62b38d558d552428"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
