var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
	console.log("Default task.");
});

gulp.task('lint', function () {
	gulp.src('./src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'));
});

gulp.task('uglify', function () {

});