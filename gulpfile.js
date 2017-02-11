const gulp = require("gulp");
const eslint = require("gulp-eslint");
const jshint = require("gulp-jshint");
const concat = require("gulp-concat");

gulp.task("lint", () => {
   return gulp.src(["src/**/*.js", "test/**/*.spec.js"])
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());
});

gulp.task("scripts", () => {
   return gulp.src("src/**/*.js")
       .pipe(concat("tsb-stat-extractor.js"))
       .pipe(gulp.dest("dist"));
});

gulp.task("default", ["lint", "scripts"]);