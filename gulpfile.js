var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function() {
	return gulp.src('src/css/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./dest/css/'))
});

gulp.task('sass:watch',function() {
	gulp.watch('css_module/*.scss',['sass']);
})