const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');
const fs = require('fs');

function buildStyles() {
  const includePaths = [
    path.join(__dirname, 'node_modules'),
    path.join(__dirname, '../node_modules'),
    path.join(__dirname, '../../node_modules'),
    path.join(__dirname, '../../../node_modules')
  ].filter(fs.existsSync);
  return gulp
    .src('./src/sass/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./source/style'));
}

gulp.task('build', gulp.series(buildStyles));
