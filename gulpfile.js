var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('build', function() {
  return gulp.src(['turing.core.js'])
          .pipe(concat('turing.js'))
          .pipe(uglify({outSourceMap: true}))
          .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {

});

gulp.task('test', function() {

});

gulp.task('default', function() { 
  gulp.start('build');
});