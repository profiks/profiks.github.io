import gulp         from 'gulp';
import sass         from 'gulp-sass';
import sassGlob     from 'gulp-sass-glob-import';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import easysprite   from 'postcss-easysprites';
import sourcemaps   from 'gulp-sourcemaps';
import connect      from 'gulp-connect';


const processors    = [
   autoprefixer({browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox > 14', 'Opera > 11.1', 'Android >= 4.1', 'Safari >= 7', 'iOS >= 5']}),
   easysprite({
       imagePath: 'img/sprite',
       spritePath: 'img'
   })
];



gulp.task('css', () => { 
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['scss/smacss']
        }).on('error', sass.logError))         
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css' ))
        .pipe(connect.reload());
});



gulp.task('html', () => { 
  gulp.src('*.html')
    .pipe(connect.reload());
});


gulp.task('js', () => { 
  gulp.src('js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', () => { 
  gulp.watch([ 'scss/*.scss', 'scss/**/*.scss'], ['css']);
  gulp.watch([ '*.html', '**/*.html'], ['html']);
  gulp.watch([ 'js/*.js'], ['js']);
});


gulp.task('connect', () => { 
  connect.server({
    livereload: true
  });
});



gulp.task('default', ['connect', 'html', 'css', 'watch']);

