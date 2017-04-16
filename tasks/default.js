const gulp = require('gulp');
const runSequence = require('run-sequence').use(gulp);
gulp.task('default', cb => runSequence('lint', 'spec-app', 'spec-integration', cb));
