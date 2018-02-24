var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var tsProject = ts.createProject("tsconfig.json");
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');

gulp.task("default", function () {
    return tsProject.src()
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(tsProject())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist"));
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});