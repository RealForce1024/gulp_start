var gulp = require('gulp');
var uglyfy = require('gulp-uglify');
// gulp.task('hello', function () {
//   console.log("hello world");
//
// });
gulp.task('minify', function () {
  gulp.src('js/app.js')
  .pipe(uglyfy())
  .pipe(gulp.dest('build'))
});
