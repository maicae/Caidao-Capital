var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
 gulp.src('./app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
   .pipe(sass().on ('error', sass.logError))
   .pipe(gulp.dest('./app/css'));
});

gulp.task ('sass:watch', function () {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});