<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [service-worker-test](#service-worker-test)
  - [current browser setup for https](#current-browser-setup-for-https)
    - [in chrome:](#in-chrome)
    - [in firefox:](#in-firefox)
  - [building & launching](#building--launching)
    - [custom service worker](#custom-service-worker)
    - [using google workbox](#using-google-workbox)
  - [issues](#issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# service-worker-test

a simple test to see how it differs from using workbox & writting it's own

## current browser setup for https

We need to let the browsers serve the app throught https. Thanks to this [simple guide we have ](https://improveandrepeat.com/2016/09/allowing-self-signed-certificates-on-localhost-with-chrome-and-firefox/)

### in chrome:

```
chrome://flags/#allow-insecure-localhost
```

should be checked

### in firefox:

just add an exceptions for the website

## building & launching

`npm install` then:

### custom service worker

```
npm run serve:custom
```

will run on [https://localhost:3500](https://localhost:3500)

### using google workbox

```
npm run serve:workbox
```

will run on [https://localhost:3600](https://localhost:3600)

## issues

on `chrome` the custom script isn't reliable for an unfound reason…

Getting this strange error:
```
Failed to fetch 
```

