var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');

gulp.task('scss', function () {
	gulp.src(['./scss/main.scss'])
		.pipe( plumber() )
		.pipe( sass({
			sourceComments: 'normal',
			errLogToConsole: true,
	      onError: function (e) {
	        console.log('sass error is ', e);
	      }
		}) )
		.pipe( autoprefix() )
		.pipe(concat('styles.css'))
		.pipe( gulp.dest('./css') );
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host:             'localhost',
      port:             '81',
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['scss']);
});

gulp.task( 'default', ['scss', 'webserver', 'watch'] );