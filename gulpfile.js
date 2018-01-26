const gulp = require( `gulp` )
const del = require( `del` )

function cpImages () {
  return gulp
  .src( `images/*.jpg`, {base: '.'} )
  .pipe( gulp.dest(`custom-sw`) )
  .pipe( gulp.dest(`workbox-sw`) );
}
cpImages.description = `copy images to the test folders`;

function cleanWorkbox() {
  return del( `workbox-sw/workbox-*` );
}
cleanWorkbox.description = `remove workbox-cli generated files`

gulp.task( `cp-images`, cpImages )
gulp.task( `clean-workbox`, cleanWorkbox )
