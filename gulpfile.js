var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rm = require('del');

gulp.task('lint', function () {
	gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(jshint.reporter('fail'));
});

gulp.task('uglify', ['lint'], function () {
	gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function (callback) {
	rm(['dist'], callback);
});

gulp.task('default', ['uglify']);