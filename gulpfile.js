const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/*.html', gulp.series('minify'));
});

gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('sass', 'minify', 'serve'));