'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8412d20411b9ece69d0265f731653971",
".git/config": "dad772a0bc033ee6c5c54880c539b6a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b3b637756df60cebd2a1d4caad20997c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "206f83ee91320414cd956fa77beb7a64",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac1063fd016f5f79a8eb6f8946cc5eca",
".git/logs/refs/heads/main": "ac1063fd016f5f79a8eb6f8946cc5eca",
".git/logs/refs/remotes/origin/main": "bb73f7a6f6bedf6bc7dd4d46ceea51d6",
".git/objects/00/1dcff20a95124d2cdcf11d9351aa7ff85274c0": "5f738a1e508db31cf41174776dcf1ef1",
".git/objects/00/5713172f3391173346e75621d2ac4e0f04d57b": "7a76dc180af307bfeabefcecd465f2ba",
".git/objects/01/1b54dfc7dc03d8118d86344c71569b7389489c": "2e287ffca1b17e711fb37cac59aa03a8",
".git/objects/08/f9dc0e3d2f0c38d525550caf285d607748fcb0": "df961594383a4018e1ffc988e22ef02b",
".git/objects/0b/9a088604d44b97d5843f89161b82e578370f56": "a697f6804d68b2c923212ae4f7686bdc",
".git/objects/0d/7e358280cb922c31d90eba658663a1059392ae": "986b432fb4089e471a5c698cb75fa69b",
".git/objects/1e/9ce082edfd9e31b6c6b270a9fc35b4563436f7": "667a4e165a138a49d1eeb20f595dd06a",
".git/objects/1f/90b7e4bcf07e9cd36242397a8eb3e44929738e": "42e9d978f8ef9ac4604bb6e77d4c33bc",
".git/objects/1f/bb7ed52e6713c12bca9a66ec358e7c78f2ee0c": "1f340719a687deb06bb6a5b83de99d40",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/782f5cb0f6a5958e09eb1671706f9251374354": "b2f5c8054680c90ec9ad84a56632c33d",
".git/objects/2a/e8e4c6e9dcbe9e91f8c9eaddc0ec84bfecb8e2": "eb53323e7a2165ccef8d75047db8c5d5",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/31/636ae37e9269ab29d9641c15b7922640f0604d": "58264bdbed0eae4ce1c70d42b2d558bb",
".git/objects/32/971c0a593173716ffc586d12a6c44227de18ad": "982dad2937bb232b8cdfcc1caf85d740",
".git/objects/33/407445598ca2e1b476c79b1b611637996892b3": "4540579f73763ae96890fd5a6b5c9968",
".git/objects/34/17c85d18b91667b0febc73861f3526e3319cec": "357f4f226587f7cc590a85914fe01e5d",
".git/objects/36/ebf83343f5ac03692f9e21514a133b19cd4b4b": "1cc5a3563019e171c355461eb0483f9e",
".git/objects/3e/b9b353d419ee1b772970f6e596ac39629968be": "7973a6aa0c2242b18a9b1d54c6841bf5",
".git/objects/40/199432575f9c15002185db8577e9eed98bc325": "9c79e91ac887838759f468b3241619ab",
".git/objects/40/23190df7726d37c14e2338d9f4662a2cf969ef": "bb420c74fa6f8dafba2bcfb7c4ae8192",
".git/objects/49/1ae4ce06f59ae5aceaaefe3b5dbce602d4a761": "1e5d2d0571a774b5f902d6a680c4a41d",
".git/objects/51/a638f0b27a8df65c37c8c59500071bc8b98ee6": "d8af5af894552fa5cfcb7e22e5655c10",
".git/objects/55/7320dec23221ac346da27a884ebfaca9f6793b": "1bf2152c2e1a5ccfa35ed26c3489064f",
".git/objects/58/61be78236d0d1fa76c94787136b1d181715347": "1a2bfe875a6fa73c1481d6029ac38c9d",
".git/objects/59/deaab3c19db4434f0d57e0708ebf716fd7b3bf": "b7f4df5cb319649391fdd9837c3a3a44",
".git/objects/62/a10fe842fbaea17d699be5a7b2fce36d3279d8": "14caa4836cd2a62a8543713699e48dd0",
".git/objects/64/ff1ef89209b5656321e7bf68386fc5d372847f": "0105a8bf8aeeb8f6403300467f50e515",
".git/objects/65/b0cbbce9acd41161da63f3478cd27b43aa76df": "c1ed3dbf9c0a32ba0bfa6a1754de5a06",
".git/objects/6b/7ce7c780937bea79ef1ed7931d0d13c45cc09a": "ef8649d6768a68a3210d7dab9560a861",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/72/bb3cd264302ebbd2629266fa6cf022aab9f4a3": "abf45fcdf4180229140157f021b1c8f7",
".git/objects/74/8d69183c4f923339e66710aae79f5cb5353fae": "2e9b666a44c40f005365f445fa8cbcb8",
".git/objects/75/3bffe3ddb108656edbfe83ee9a0a848eed8faf": "ae311fd29c4560f6b6169153383468ee",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/78/6691f8b608393fca6e2a62b5ed231a33726196": "ea622d7ac5ef80422e1881c21f76a785",
".git/objects/7a/a28e36a3ef17b64cbe38306542f081adaf0ba7": "92ea88aace2ee39aa31f87bdc763b41e",
".git/objects/7f/a5921e44386192581552535ece1e64ccba66ce": "30ba12f90949d77f62b8bb7167d02f8f",
".git/objects/85/9867c735f2af0315c7075d00d94a020522b500": "7ecc17ae21f77275e6d46984e283df58",
".git/objects/88/3f7a182e1fc94c0fcd721936e4fd20a151f107": "42f11a1e51af8e0581ef035bd464a3cc",
".git/objects/89/2b3be0181439823edf9c9f97be4cd3e01b8d6c": "6bac9d1c3397a95359a3105292760c78",
".git/objects/89/79078a04060aea66e2c88634146909f0215a20": "13b82a24304236787d05b5387bba7e1b",
".git/objects/90/167681097eda034a492542b2f7df05b53e5973": "ad03af982182c1e931b5b1b461c59b6d",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/92/e17683e33d909f7d0f66a5efeefe7735a0e9b5": "2894c42b45c276c719200ccfd763d6d0",
".git/objects/97/32a599a7d8d92e89fd2a48fcf7f9ac582b70e0": "c96c6ed68c16c702dafa1a88eb987582",
".git/objects/97/e8fb2d9a0ec3d1737b04cfe1180d8c0ebf697c": "3910dd7e9059e73e27145c9622ace260",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/a5/02e70ac5d6ed17e72bfb591fd1b9c6c4250f15": "d865c92f379df61d0a86baf6ae43321d",
".git/objects/a9/bbbb2e81ba8bc68eb827bda2d37e0c536c6404": "bb2aeac637fc9c17646cb0f363b1717a",
".git/objects/ac/c2d18effb87a013c6fda2442178690d415a037": "d73c192da1160c266040b24d15ffd0f9",
".git/objects/af/d23d2c5ad986a699780ac1b433620818f1d593": "98443389f89a5c223d4cafe30f982fbe",
".git/objects/b0/5a78c61cb94f14a447c485f4ff1175e4025ab3": "c19943319e3da7a4f606849cfcf10eaa",
".git/objects/b1/c00a316814f2a5f2224e3233ca889a0239e113": "421ec1695fb04d4da36e55f3d6c462e0",
".git/objects/b2/87a323c7b1c4a303e5ca1d84a74e779a8ff2e1": "8f7f48893851810e31c2ead9034777af",
".git/objects/b9/4910138af6efcb906508bdcebc8683cee66bc6": "23279b6e82a5d3fa8c6fc914aafbc9cb",
".git/objects/b9/6727eae73d1541c519fa37ea30889646cc2d22": "9b89289b4defea62615e918a458660dc",
".git/objects/ba/a94b79b80b9ad01ee04344432771a10437215b": "004bf61f28fac5f505c13ff463ee2f19",
".git/objects/bc/a38218f4d232c8ec0fe190e6e93f4649e82b62": "8b73a783ba0eb8ac9015c8cf43d93884",
".git/objects/bd/64797af33b8c218a01b273f0ae61181c9c9863": "44e7a23bdc81a00751818ca489fb2204",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c3/3bafbf1d9c05dba63717f6d5cc0fb70add0777": "d60045322fc37cbac3e24b26c6c1b709",
".git/objects/c6/e99947483479b07540eaf2e9746f906942a154": "a1d6e0076ba9f5a5ee214a7cafc34664",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/23344021944ca01ee8bd6bf26c2a9bb36acb66": "145bc44a97569a770bff7c8b1820a751",
".git/objects/df/0aa752b66099b1a052feb494b6782f6a652f9c": "734cc98298823e410c139c016bd3fb1a",
".git/objects/df/c2edcb3f47debeb9ea42248726720ed5fb713f": "de71df9139dc01108b9799f248b36891",
".git/objects/e0/b84d28828c7d5663714ba7cf37354cf16bf184": "c4db7e3cba8ed575481ae5a0560e6328",
".git/objects/e2/97ce72fdd256783231ee3504ec054c32dc9522": "16b9a71c482fe953951c7ee09e7e60ea",
".git/objects/e4/063a492401d5d1b7d2b4bd24cb9ce9458efe34": "21d7ff87a5f104d80d409de85e285112",
".git/objects/e4/d2a973fb1633e2c7dc1414683c2f5bf937abd2": "41e74c71c7755ef6c9148fbd99f9ddf3",
".git/objects/e6/31ddf2abaddc6725dcc0f787ecf45008496e22": "b16257fd3971bb79e3cc577eb31e5954",
".git/objects/e7/83f5ba215ea11fccd59f222622632de0c8f28b": "a7622e23e3db7ecdf3d3278c805fa4e3",
".git/objects/e7/ba22268c6d6d09ddb8dd0bf2c433dda86c6500": "1428a3688e5f6bffe9a595a66b3cb168",
".git/objects/f1/2d94e2a9f9f3fd3b3df25bf5cecb95cd8aa5a4": "24128a0cefed7662b830d81ec8a6bb8b",
".git/objects/f1/b62f7904f82cb9a1e445732d8faac4c6cb89da": "bbbe0679d7aa2327c4b0fc8c3e8f6f9f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/6648dc97023d14b786d65409098bfe3b31ae33": "092242b3b96dc43372e6623aa9ee54d8",
".git/objects/fc/15bc53e05286ca4649ca411df9d38cb7d9a5fd": "a0873eb4d7f22064d8751c0384fe2cdb",
".git/objects/fc/2d758d96b248106c96597ec6271d0575d43ab6": "12d0e0cd20ee215ac92480ca64f3d81b",
".git/objects/fc/45d82d4b1ef047a4e0c92820ebd0be65ac98a3": "34f7d9cba5457524cfbce3f09e1836d1",
".git/objects/fd/043054de47d666a2d093c9c56490665a185027": "489d24b572bb27fae0c710b1a4ba213b",
".git/objects/fe/0662e8928614a4fcf7e0a0cbc0891b5f73322a": "a3b815b5e05afa3d2781a9ec9346bd42",
".git/ORIG_HEAD": "d4c6cdbd4e263dbb4a3aed2fd8185fef",
".git/refs/heads/main": "d4c6cdbd4e263dbb4a3aed2fd8185fef",
".git/refs/remotes/origin/main": "d4c6cdbd4e263dbb4a3aed2fd8185fef",
"assets/3dModel/scene.glb": "b38da04baa6d9341f0270d48caaeafa6",
"assets/AssetManifest.bin": "4230fe59c7f5da883febeb4697261c21",
"assets/AssetManifest.bin.json": "efc766dd0622da10ed5d7c9ac02af802",
"assets/AssetManifest.json": "f7d500c8e281f363867cdd6011b2bc9f",
"assets/assets/3dModel/scene.glb": "b38da04baa6d9341f0270d48caaeafa6",
"assets/assets/background_images/modelBackground.jpg": "9c588a95be5eb17004182d50b2867944",
"assets/assets/background_images/pageBackground.jpg": "4c61746dc816299aa50a50d778b93151",
"assets/assets/button_icons/heart1.png": "032d5c53360b904184868e48008f7672",
"assets/assets/button_icons/heart2.png": "66bf2a17f764835d3ac70e9564b37013",
"assets/assets/button_icons/heart3.png": "594af6e421f3a73a342484e1f848951d",
"assets/assets/card1/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/assets/card1/front.jpeg": "de0cd0e433f8393c7781bd6e2f4ec9e0",
"assets/assets/card2/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/assets/card2/front.jpeg": "be9b65f24363ac72c03b0eb079c678ba",
"assets/assets/card3/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/assets/card3/front.jpeg": "031e92360606cd5df1621609642d7766",
"assets/assets/card4/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/assets/card4/front.jpeg": "049906796c87ad537b4964ebeb36f049",
"assets/assets/decoration_images/bannerImage.jpeg": "e7758bce6156bec194964d313cfdc339",
"assets/background_images/modelBackground.jpg": "9c588a95be5eb17004182d50b2867944",
"assets/background_images/pageBackground.jpg": "4c61746dc816299aa50a50d778b93151",
"assets/button_icons/heart1.png": "032d5c53360b904184868e48008f7672",
"assets/button_icons/heart2.png": "66bf2a17f764835d3ac70e9564b37013",
"assets/button_icons/heart3.png": "594af6e421f3a73a342484e1f848951d",
"assets/card1/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/card1/front.jpeg": "de0cd0e433f8393c7781bd6e2f4ec9e0",
"assets/card2/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/card2/front.jpeg": "be9b65f24363ac72c03b0eb079c678ba",
"assets/card3/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/card3/front.jpeg": "031e92360606cd5df1621609642d7766",
"assets/card4/back.jpg": "3b24914f742b5469977366bc8579806b",
"assets/card4/front.jpeg": "049906796c87ad537b4964ebeb36f049",
"assets/decoration_images/bannerImage.jpeg": "e7758bce6156bec194964d313cfdc339",
"assets/FontManifest.json": "94bb72ebe7bab246ba259fa02525cbdb",
"assets/fonts/goudy_bookletter_1911.otf": "675e6eaf9a289c3b8766514319e02e52",
"assets/fonts/MaterialIcons-Regular.otf": "05fdefe5f8dd3f8eb60bdb78f18649ea",
"assets/NOTICES": "1d28cbf77056ff2cc0766646b03d5610",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ee28c743c79cf9fe910e61b7fd95b93c",
"canvaskit/canvaskit.wasm": "97f0f58b59576116cea6338ff17fd1fc",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "24907d700736ef0810e19bdf1cb84c22",
"canvaskit/chromium/canvaskit.wasm": "0e4b52c4ab1be1280ef35144ae0817df",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "cc728537b31d099870b80e82c164775b",
"canvaskit/skwasm.wasm": "ce8b3e20606f87265c0c0d14d8968068",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "616f79b471fee4942f12cf6f2f9fa404",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"index.html": "a850213b7b1e2aa38ea27050e4c4198d",
"/": "a850213b7b1e2aa38ea27050e4c4198d",
"main.dart.js": "d633058b04a74a85fede533519b58bcc",
"manifest.json": "237d201e8155922da7592595aa7e22ba",
"version.json": "d5c36be2daaae75b16720289906e6eba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
