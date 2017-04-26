var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var argv         = require('yargs').argv;

gulp.task('browser-sync', function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browser-sync']);
