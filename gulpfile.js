var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var concat = require('concat-stream')
var gutil = require('gulp-util');

gulp.task('watch', function() {
  gulp.watch('./dist/install.html')
    .on('change', function(ev) {
      browserSync.reload(ev.path);
    });

  gulp.watch([
    './{lib/**,index}.js',
    'templates/*.html'
  ], ['html']);
});

gulp.task('html', function() {
  bundle(function(bundleStr) {
    gulp.src('./templates/install.html')
      .pipe(preprocess({
        context: {
          script: encodeURIComponent(bundleStr)
        }
      }))
      .pipe(gulp.dest('./dist/'))
  });
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    },
    startPath: 'install.html'
  });
});

gulp.task('default', ['html', 'watch', 'browser-sync']);

function bundle(cb) {
  var b = browserify();
  b.add('./index.js');
  b.transform({
    global: true
  }, 'uglifyify');
  b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(concat(function(data) {
      cb(data.toString('utf8'));
    }));
}
