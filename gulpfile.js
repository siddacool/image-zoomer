const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const path = require('path');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const del = require('del');
const appPath = require('./dist/public/rev-manifest.json');
const packageJson = require('./package.json');

gulp.task('html-templates', () => {
  gulp.src('./views/*.ejs')
  .pipe(ejs({
    title: `${packageJson.title}`,
    description: `${packageJson.description}`,
    theme_color: `${packageJson.theme_color}`,
    jsPath: `${appPath.app.js}`,
    cssPath: `${appPath.app.css}`,
  }))
  .pipe(rename({
    extname: '.html',
  }))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('img', () => {
  return gulp
  .src('./resources/img/**/*.**')
  .pipe(gulp.dest('./dist/img/'));
});

gulp.task('clean', () => {
  del(['./dist/public/**.js',
    './dist/public/**.css',
    '!./dist/public/app.js',
    '!./dist/public/app.css',
    `!./dist/${appPath.app.js}`,
    `!./dist/${appPath.app.css}`,
  ]);
});

gulp.task('favicon', () => {
  return gulp
  .src('./resources/favicon/*.**')
  .pipe(gulp.dest('./dist/favicon/'));
});

gulp.task('svg-make', () => {
  return gulp
  .src('./resources/svg-assets/*.svg')
  .pipe(svgmin((file) => {
    const prefix = path.basename(file.relative, path.extname(file.relative));
    return {
      plugins: [{
        cleanupIDs: {
          prefix: `${prefix}-`,
          minify: true,
        },
      }],
    };
  }))
  .pipe(rename({ prefix: 'icon-' }))
  .pipe(svgstore())
  .pipe(gulp.dest('./views/partials/'));
});
