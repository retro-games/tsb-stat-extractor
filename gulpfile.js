var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('lint', function () {
   return gulp.src('src/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
   return gulp.src('src/*.js')
       .pipe(concat('tsb-stat-extractor.js'))
       .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'scripts']);