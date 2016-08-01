var gulp = require('gulp');
var sass=require('gulp-sass');
gulp.task('sass',function(){
    return gulp.src('app/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app'))
});

gulp.task('watch.sass', ['sass'], function(){
  return gulp.watch('app/*.scss', ['sass']);
});

gulp.task('watch', ['watch.sass']);

gulp.task('default', ['sass', 'watch']);
