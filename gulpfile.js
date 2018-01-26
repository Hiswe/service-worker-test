const gulp = require( `gulp` )

function cpImages () {
  return gulp
  .src( `images/*.jpg`, {base: '.'} )
  .pipe( gulp.dest(`custom-sw`) )
  .pipe( gulp.dest(`workbox-sw`) )
}
cpImages.description = `copy images to the test folders`

gulp.task( `cp-images`, cpImages )
