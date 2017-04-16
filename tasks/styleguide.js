const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const StyleGuide = require('styleguidejs');
const del = require('del'); // rm -rf

gulp.task('styleguide-clean', function() {
  return del('public/docs');
});

gulp.task('styleguide-css', ['styleguide-clean'], () => {
  return gulp.src(['app/stylesheets/application.scss','app/stylesheets/styleguide.scss'])
    .pipe(plugins.plumber())
    .pipe(plugins.sass({errLogToConsole: true}))
    .pipe(gulp.dest('public/docs'));
});

gulp.task('styleguide-docs', ['styleguide-css'], (callback) => {
  let styleGuide = new StyleGuide();
  styleGuide.addFile('public/docs/application.css');
  styleGuide.render({
    extraCss: ['public/docs/styleguide.css'],
    outputFile: 'public/docs/styleguide.html'
  });

  callback();
});

gulp.task('styleguide-watchers', () => {
  gulp.watch('app/stylesheets/**/*.scss', ['styleguide-docs']);
});

gulp.task('styleguide', ['styleguide-watchers', 'styleguide-docs']);