'use strict';

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var browserSync = require('browser-sync').create(); //实时刷新
var reload = browserSync.reload;

// 刷新
gulp.task('refresh', function(){
  reload();
});

// 实时刷新
gulp.task('start', ['refresh'], function () {
  browserSync.init({
    server:{
      baseDir:'./' //设置服务器的根目录
    },
    port:3003,
    logLevel: "debug",
    logPrefix:"dev",
    browser:'chrome',
    notify:false //开启静默模式
  });
  //使用gulp的监听功能，实现编译修改过后的文件
  gulp.watch(['./js/*.js'], function(){
    reload();
  });
  gulp.watch(['./tpl/*.html'], function(){
    reload();
  });
  gulp.watch(['./css/*.css'], function(){
    reload();
  });
  gulp.watch(['./img/'], function(){
    reload();
  });
});

