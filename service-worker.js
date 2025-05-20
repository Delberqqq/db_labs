/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15d2bc52b426f38f0d36bd4d1842c326"
  },
  {
    "url": "assets/css/0.styles.7199c42d.css",
    "revision": "65096e2a703ad22d7e398438944707cd"
  },
  {
    "url": "assets/img/delete-analysis-report.b29102ee.png",
    "revision": "b29102eed67435424fe8a6320ab2c944"
  },
  {
    "url": "assets/img/get-analysis-report-id.064ba72b.png",
    "revision": "064ba72bbeadf58eaaf2645bfc406146"
  },
  {
    "url": "assets/img/get-analysis-report.939d3fe0.png",
    "revision": "939d3fe08e540e99b1fff7af3271f850"
  },
  {
    "url": "assets/img/patch-analysis-report.cc96b240.png",
    "revision": "cc96b240a2390a404b8bab96e2ddee37"
  },
  {
    "url": "assets/img/post-analysis-report.ee67fa23.png",
    "revision": "ee67fa236ded387d3f707fb106acad91"
  },
  {
    "url": "assets/img/relational_schema.8b4855d6.png",
    "revision": "8b4855d6df93b39fc4bc6348e9e3d2c9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4f697703.js",
    "revision": "56a9e1f6f6fa32f71b5cd30c515c14c3"
  },
  {
    "url": "assets/js/10.8fb91a0b.js",
    "revision": "43febe79930264c0f2322114a9bb81e0"
  },
  {
    "url": "assets/js/13.d2fb694f.js",
    "revision": "05a5cfd6e7695da0f8fa0c33369961d2"
  },
  {
    "url": "assets/js/14.79905ffa.js",
    "revision": "68c67025f3186f2a4be3da0052cc7415"
  },
  {
    "url": "assets/js/15.35f51e7a.js",
    "revision": "e12f4159038bec2e088cb4ef591e0d98"
  },
  {
    "url": "assets/js/16.c76230f1.js",
    "revision": "6aa8bce7471daf495def7a9c20b88963"
  },
  {
    "url": "assets/js/17.21668a8c.js",
    "revision": "631c907ea8e702e3891f1dbbf91be83e"
  },
  {
    "url": "assets/js/18.c0f72ca8.js",
    "revision": "35abd56a1d3fb3efdb35ecfdc9d32132"
  },
  {
    "url": "assets/js/19.a8cde640.js",
    "revision": "0cdbb13a0c590a7c009b0bbfed8b6c01"
  },
  {
    "url": "assets/js/2.de9f1d44.js",
    "revision": "24adeef38565b6d1bb6aa31cff132e1a"
  },
  {
    "url": "assets/js/20.e656487d.js",
    "revision": "4168a5ebb65f3790f6ae0facbdf76818"
  },
  {
    "url": "assets/js/21.800aaaf0.js",
    "revision": "70c8025a45e739bfc419faf690af6707"
  },
  {
    "url": "assets/js/22.ba18d813.js",
    "revision": "7c60ff34c617c02f0c2736911514d951"
  },
  {
    "url": "assets/js/23.a79069c8.js",
    "revision": "bb3c73804cca0510e95025a8de001225"
  },
  {
    "url": "assets/js/24.99247842.js",
    "revision": "18b7ff9d71e3d9f31b9392cb719d8fe5"
  },
  {
    "url": "assets/js/25.fa9d2155.js",
    "revision": "d95195a7101eb5bd606b70dafe60c713"
  },
  {
    "url": "assets/js/26.86ec7267.js",
    "revision": "93a93b718b8a0635302f46e4126ae9be"
  },
  {
    "url": "assets/js/27.7ba2c5f5.js",
    "revision": "7480614c4e30c8315b2a63bf705e1a84"
  },
  {
    "url": "assets/js/28.619d1838.js",
    "revision": "ea2bfd62c63caa05be0868fe2cace9b0"
  },
  {
    "url": "assets/js/29.e42a70f8.js",
    "revision": "695bbca498afcec357be945371607025"
  },
  {
    "url": "assets/js/3.a89161d0.js",
    "revision": "fd3218d88795348854b15b73fee454d0"
  },
  {
    "url": "assets/js/30.124d2b0a.js",
    "revision": "216db719d0007e4dc4337d25b949f69e"
  },
  {
    "url": "assets/js/31.bbf9c525.js",
    "revision": "56ad23a5d22439c135bb8dc6d8f39c70"
  },
  {
    "url": "assets/js/32.2ab0c6ac.js",
    "revision": "5bcff6ad09692ebe72c7bb3584c90f29"
  },
  {
    "url": "assets/js/33.c156cc25.js",
    "revision": "c0657c28b0dded62cbd78892a76077d5"
  },
  {
    "url": "assets/js/34.8b8ef4a3.js",
    "revision": "3991823ad3c22585f965adde1aff68e7"
  },
  {
    "url": "assets/js/35.77857034.js",
    "revision": "de747a8c2b28e758dbda1429f3eedfa8"
  },
  {
    "url": "assets/js/36.752cda63.js",
    "revision": "3d46a7923c821b421a142947a42fb7f4"
  },
  {
    "url": "assets/js/37.6c831497.js",
    "revision": "055c28d3fd399f3255d29e5e41a16838"
  },
  {
    "url": "assets/js/38.021279c4.js",
    "revision": "0e4b7a372a8ca9a7461b1dd5d740ec0b"
  },
  {
    "url": "assets/js/39.9627d9e6.js",
    "revision": "ac25b8e2d767a2c09bf216b6e53e650f"
  },
  {
    "url": "assets/js/4.16cd27a5.js",
    "revision": "6ec35773d1a24b4fbb488da464d44f87"
  },
  {
    "url": "assets/js/41.a6fe2a84.js",
    "revision": "1365fb1778fdcaf4855a8bcab2f9c144"
  },
  {
    "url": "assets/js/5.3c29e1d9.js",
    "revision": "180d479c07fd8e0fcbebeda1a39f797c"
  },
  {
    "url": "assets/js/6.95d3732c.js",
    "revision": "6afed87f836aabc7ccdda9a492abfb22"
  },
  {
    "url": "assets/js/7.93a3588a.js",
    "revision": "8c53a3b6f8714ffd6b88d688e2953f51"
  },
  {
    "url": "assets/js/8.0d793cad.js",
    "revision": "b2e90c19d5bba62f2c492998194d3898"
  },
  {
    "url": "assets/js/9.47847a76.js",
    "revision": "4be8bc706b3c36a2b229635a1fcee85e"
  },
  {
    "url": "assets/js/app.e7835008.js",
    "revision": "feef88ac823db2e683633428ff097d48"
  },
  {
    "url": "assets/js/vendors~docsearch.effc7025.js",
    "revision": "e272cc7aa0e45f691c1217f5447dc6f7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e3fc1875bca87c0658740d7867040f60"
  },
  {
    "url": "design/index.html",
    "revision": "10de0502ccd693ef41dc44fba81bd91c"
  },
  {
    "url": "index.html",
    "revision": "dc059255fe75cc3af05c2ccd8726a585"
  },
  {
    "url": "intro/index.html",
    "revision": "aa69361163648aa60506d0ea8fce8c0d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7eff1568575a926d664fbcb2ad507305"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6ab10d80ebdf3db8d195f938f8cce742"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "79f39ccab110a3bca9f8f39e48cd5dce"
  },
  {
    "url": "software/index.html",
    "revision": "f0d512d687e0b80b58bdf2fbf0c41b12"
  },
  {
    "url": "test/index.html",
    "revision": "c505f693093431271dc66e130f4c626e"
  },
  {
    "url": "use cases/index.html",
    "revision": "726d9e1124acf905f1c4dd8293ebe59d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
