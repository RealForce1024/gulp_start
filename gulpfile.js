var gulp = require('gulp'),
  uglify = require('gulp-uglify');
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat');

// gulp.task('hello', function () {
//   console.log("hello world");
//
// });

// gulp.task('minify', function () {
//   gulp.src('js/app.js')
//   .pipe(uglyfy())
//   .pipe(gulp.dest('build'))
// });

gulp.task('Task', function () {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build'))
});
