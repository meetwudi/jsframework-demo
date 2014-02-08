var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    yuidoc = require('gulp-yuidoc'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');


var sourceFilesGlob = 'turing.*.js',
    sourceFiles = ['turing.core.js', 
                  'turing.main.js', 
                  'turing.util.js', 
                  'turing.oo.js'],
    targetFile = 'turing.js',
    targetFilePath = 'build/turing.js',
    buildPath = 'build',
    docPath = './doc';


gulp.task('lint', function() {
  return gulp.src(sourceFilesGlob)  
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint'], function() {
  return gulp.src(sourceFiles)
          .pipe(concat(targetFile))
          .pipe(gulp.dest(buildPath))
          .pipe(rename({suffix:".min"}))
          .pipe(uglify({outSourceMap: true}))
          .pipe(gulp.dest(buildPath));
});

gulp.task('doc', ['build'], function() {
  return gulp.src(targetFilePath)
    .pipe(yuidoc())
    .pipe(gulp.dest(docPath));
});

gulp.task('watch', ['doc'], function() {
  gulp.watch(sourceFiles, ['doc']);
});

gulp.task('default', function() { 
  gulp.start('watch');
});