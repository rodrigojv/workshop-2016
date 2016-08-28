var gulp        = require('gulp');
var browserify  = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
gulp.task('build', function(){
	browserify('./index.js')
	   .bundle()
	   .on('error', function(e){
	      gutil.log(e);
	   })
	   .pipe(source('bundle.js'))
	   .pipe(gulp.dest('./dist'))
});