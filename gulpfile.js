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


//gulp.src()
//
// gulp.task('Task', function () {
//   return gulp.src(['js/*.js','!js/*.min.js'])
//   // return gulp.src('js/*.js') //包含min.js文件也被压缩合并进去了
//   .pipe(jshint())
//   .pipe(jshint.reporter('default'))
//   .pipe(uglify())
//   .pipe(concat('app.js'))
//   .pipe(gulp.dest('build'))
// });




//defining simple tasks
// gulp.task('gretting', function () {
//   console.log('hell world');
// });



//defining multiply tasks
gulp.task('js', function () {
  console.log('js');
});
gulp.task('html', function () {
  console.log('html');
});
gulp.task('css', function () {
  console.log('css');
});
gulp.task('build',['js','html','css'],function () {
  console.log('build');
})
