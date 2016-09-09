var gulp = require('gulp');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus')
var paths = {
  scripts: ['./dev_resource/js/*'],
  stylus: ['./dev_resource/stylus/*']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
      .pipe(uglify())
    .pipe(gulp.dest('./pro_resource/js'));
});

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
      	compress:true
      }))
    .pipe(gulp.dest('./pro_resource/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['watch', 'scripts','stylus']);