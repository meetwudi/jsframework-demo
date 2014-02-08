var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    yuidoc = require('gulp-yuidoc'),
    rename = require('gulp-rename');

gulp.task('build', ['test'], function() {
  return gulp.src(['turing.core.js'])
          .pipe(concat('turing.js'))
          .pipe(gulp.dest('build'))
          .pipe(rename({suffix:".min"}))
          .pipe(uglify({outSourceMap: true}))
          .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {

});

gulp.task('test', ['lint'], function() {

});

gulp.task('doc', ['build'], function() {
  gulp.src('build/turing.js')
    .pipe(yuidoc())
    .pipe(gulp.dest('./doc'));
});

gulp.task('default', function() { 
  gulp.start('doc');
});