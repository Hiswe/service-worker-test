`use strict`;

const CACHE_NAME = `custom-sw-test`;
const TO_CACHE =  [
  `/`,
  `/index.html`,
  `/images/01-temple.jpg`,
  `/images/02-stairs.jpg`,
  `/images/03-chedi.jpg`,
  `/images/04-boudha.jpg`,
  `/images/05-flowers.jpg`,
  `/images/06-city.jpg`,
];

const precache = () => {
  console.log( `[CACHE] init pre-caching` );
  return caches
  .open( CACHE_NAME )
  .then( cache => {
    console.log( '[CACHE] caching files…' );
    // make a one by one cache instead of cache.all()
    // for better error output
    return Promise.all( TO_CACHE.map( url => {
      return cache
      .add( url )
      .then( () => console.log( `[CACHE] done for ${url}`) )
      .catch( reason => console.warn( `[CACHE] ${url} failed: ${reason} `) );
    }))
  })
  .then( cacheDone => {
    console.log( '…cache done!' );
  })
  .catch( err => {
    console.warn( 'unable to open cache' );
    console.error( err );
  });
}

self.addEventListener( 'install', event => {
  console.log( '[SW] Install done' )
  event.waitUntil( precache() )
} )

const getRessource = request => {
  return caches
  .open( CACHE_NAME )
  .then( cache => cache.match( request ) )
  .then( matching => {
    if (matching) {
      console.log( `[FROM CACHE] match ${ request.url }` )
      return matching
    }
    console.log( `[FROM CACHE] not in cached. Try to fetch ${ request.url }` )
    return fetch( request )
  })
  .catch( err => {
    console.error(err)
    // return a valid Response for event.respondWith
    return new Response(`<html><p>${err}</p></html>`, {
      headers: {
          "Content-type": `text/html`,
      },
      status: 500,
      statusText: `fetch error`,
    });
  })
}

self.addEventListener( 'fetch', event => {
  const { request } = event;
  console.log( `[FETCH] intercepting ${request.url}` );
  // Try cached. Failing => network
  event.respondWith( getRessource(request) );
});
