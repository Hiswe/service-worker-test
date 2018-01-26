importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "37e86dc68f8b0ba9ae78d1736d3c1e6f"
  },
  {
    "url": "images/01-temple.jpg",
    "revision": "4525905ce26efb5f48114a97c7b4e40a"
  },
  {
    "url": "images/02-stairs.jpg",
    "revision": "ea006212e73e9fe89274c6eb7e3ae55a"
  },
  {
    "url": "images/03-chedi.jpg",
    "revision": "a22566af23b07566a6e4a070fb4ac9dd"
  },
  {
    "url": "images/04-boudha.jpg",
    "revision": "582192aaabba135339a6318f5621c1a1"
  },
  {
    "url": "images/05-flowers.jpg",
    "revision": "980e4756f22385bace8de058b61ecd97"
  },
  {
    "url": "images/06-city.jpg",
    "revision": "2882b17813acc6be4c26dd2f1d5313bc"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "workbox-sw-test"
});
workboxSW.precache(fileManifest);
