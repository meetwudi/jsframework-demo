var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jsdoc = require('gulp-jsdoc'),
    rename = require('gulp-rename');

gulp.task('build', function() {
  return gulp.src(['turing.core.js'])
          .pipe(concat('turing.js'))
          .pipe(gulp.dest('build'))
          .pipe(rename({suffix:".min"}))
          .pipe(uglify({outSourceMap: true}))
          .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {

});

gulp.task('test', function() {

});

gulp.task('doc', function() {
  gulp.src('build/turing.js')
    .pipe(jsdoc('./doc'));
});

gulp.task('default', function() { 
  gulp.start('lint', 'test', 'build', 'doc');
});