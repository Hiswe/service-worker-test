// all options are listed here
// https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.Configuration

module.exports = {
  "cacheId": "workbox-sw-test",
  "globDirectory": "workbox-sw/",
  "globPatterns": [
    "**/*.html",
    "**/*.jpg"
  ],
  "swDest": "workbox-sw/workbox-sw-test.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ]
};
