var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    yuidoc = require('gulp-yuidoc'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma');

gulp.task('build', ['lint'], function() {
  return gulp.src(['turing.core.js'])
          .pipe(concat('turing.js'))
          .pipe(gulp.dest('build'))
          .pipe(rename({suffix:".min"}))
          .pipe(uglify({outSourceMap: true}))
          .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {

});

gulp.task('test', ['build'], function() {
  return gulp.src(['build/turing.js', 'node_modules/should/should.min.js','test/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));
});

gulp.task('doc', ['test'], function() {
  return gulp.src('build/turing.js')
    .pipe(yuidoc())
    .pipe(gulp.dest('./doc'));
});

gulp.task('default', function() { 
  gulp.start('doc');
});