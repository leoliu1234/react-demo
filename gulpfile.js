var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('builder', function () {
    return browserify({ entries: './app.jsx', extensions: ['.jsx'], debug: false })
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('bundle.js'))
        //  .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('dest'));
});

gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('watch', ['builder'], function () {
    gulp.watch('./**/*.jsx', ['builder']);
});

gulp.task('build', ['builder']);