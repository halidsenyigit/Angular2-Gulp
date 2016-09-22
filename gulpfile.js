var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var del = require("del");
var runSequence = require('run-sequence');
var ts = require("gulp-typescript");
var sass = require('gulp-sass');


var tsProject = ts.createProject('tsconfig.json');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.',
      injectChanges: true
    },
  })
})

gulp.task("copy", ["refreshPage"], function(){
	gulp.src('src/views/**/*.html')
	.pipe(gulp.dest('dist/'))
})

gulp.task("clean", function(){
    del("dist");
})

gulp.task('compileTs', ["refreshPage"], function(){
    console.log("Compliler is working...");
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('compileScss',["refreshPage"], function() {
  return gulp.src('src/styles/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});

gulp.task("refreshPage", function(){
   browserSync.reload(); 
});

gulp.task("watcher", function(){
    gulp.watch("src/**/*.ts", ["compileTs"]);
    gulp.watch("src/**/*.scss", ["compileScss"]);
    gulp.watch("src/views/**/*.html", ["copy"]);
})

gulp.task("default", function(callback){

    runSequence("clean", ['compileTs', "compileScss", 'copy', 'browserSync', 'watcher'], callback);

    console.log("###########################################");
    console.log("###              It's Works             ###");
    console.log("###########################################");
});