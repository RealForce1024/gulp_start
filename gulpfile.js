// var gulp = require('gulp'),
  // uglify = require('gulp-uglify');
  // jshint = require('gulp-jshint'),
  // concat = require('gulp-concat');


  /////gulp gulp-load-plugin start///////////////////////////////////////////
      // var gulp = require('gulp'),
      //   uglify = require('gulp-uglify');
      //   jshint = require('gulp-jshint'),
      //   concat = require('gulp-concat');
  var gulp = require('gulp'),
    gulploadPlugins = require('gulp-load-plugins'),
    plugins = gulploadPlugins();

  gulp.task('Task', function () {
    console.log('new task');
    return gulp.src(['js/*.js','!js/*.min.js'])
    // return gulp.src('js/*.js') //包含min.js文件也被压缩合并进去了
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('build'))  //.pipe(plugins.gulp.dest('build')) 这种方式是错误的
  });
/////gulp gulp-load-plugin end///////////////////////////////////////////




/////gulp src() start///////////////////////////////////////////
// gulp.task('hello', function () {
//   console.log("hello world");
// });

// gulp.task('minify', function () {
//   gulp.src('js/app.js')
//   .pipe(uglyfy())
//   .pipe(gulp.dest('build'))
// });
/////gulp src() end///////////////////////////////////////////



/////gulp src() start///////////////////////////////////////////
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
/////gulp src() end///////////////////////////////////////////


/////gulp task() start///////////////////////////////////////////
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
// gulp.task('build',['js','html','css'],function () {
//   console.log('build');
// });
//上面的函数如果不做啥事情，只是统一管理任务执行,function参数也是可选的
gulp.task('build',['js','css','html'],function () {
  console.log('build');
});

//第二个函数array,可选
// gulp.task('default',['build'], function () {
//   console.log('default');
// });

//默认执行 gulp命令时 即是默认执行该default任务
// gulp.task('default', function () {
//   console.log('default');
// });
/////gulp task() end///////////////////////////////////////////


/////gulp watch() start///////////////////////////////////////////
// gulp.task('watch', function () {
//   gulp.watch('template/*.html', ['build']);
// });

gulp.task('watch', function () {
  gulp.watch('template/*.html', function (event) {
      console.log("event type",event.type);
      console.log("event type",event.path);
  });
});

/////gulp watch() end///////////////////////////////////////////
