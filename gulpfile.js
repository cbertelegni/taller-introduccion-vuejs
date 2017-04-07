// generated on 2017-04-07 using generator-lntool 0.2.0

var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    conf = require('./conf').conf;


function getPathApp(_path){ return conf.app_cwd+ _path; }

gulp.task('connect', function() {
  connect.server({
    root: conf.app_cwd,
    livereload: true,
    port:8080
  });
});


gulp.task('reload', function () {
  gulp.src('**/*.html', { cwd: conf.app_cwd })
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch([getPathApp('**/*.html')], ['reload']);
});


// development server
gulp.task('server', ['connect', 'watch']);

// default task
gulp.task('default', ['server']);



/** mahe and push github page branch from build folder */
gulp.task('deploy-gh-page', function() {
  return gulp.src(conf.app_cwd+'**/*')
    .pipe(ghPages());
});
