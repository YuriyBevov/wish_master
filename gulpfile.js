'use strict';

const gulp = require('gulp');

// CONFIG

const { PATHS, BUILD_PATH } = require('./gulp.config')

// SERVICES

const plumber = require("gulp-plumber");
const del = require("del");
const rename = require("gulp-rename");
const sourcemap = require("gulp-sourcemaps");

//HTML

const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");

// CSS

const css = require("gulp-sass");
const csso = require("gulp-csso");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// IMAGES AND SVG

const svgstore = require("gulp-svgstore");
const imagemin = require("gulp-imagemin");
const toWebp = require("gulp-webp");

// JS

const webpack = require("webpack-stream");

// SERVER

const browserSync = require('browser-sync').create();

// TASKS

const clean = () => {
  return del(BUILD_PATH);
}

const fonts = () => {
  return gulp.src([PATHS.fonts.src])
  .pipe(gulp.dest(PATHS.fonts.output));
}

const html = () => {
  return gulp.src([PATHS.html.src])
    .pipe(plumber())
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest(BUILD_PATH));
};

const styles = () => {
  return gulp.src([PATHS.styles.inputFileName])
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(css())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename(PATHS.styles.outputFileName))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest(PATHS.styles.dest))
    .pipe(browserSync.stream());
};

const js = () => {
  return gulp.src([PATHS.scripts.inputFileName])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(BUILD_PATH));
};


const server = () => {
  browserSync.init({
    server: BUILD_PATH,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    port: 3000
  });

  gulp.watch(PATHS.styles.src, gulp.series(styles, refresh));
  gulp.watch(PATHS.html.srcWatch, gulp.series(html, refresh));
  gulp.watch(PATHS.scripts.srcWatch, gulp.series(js, refresh));
};

const refresh = (done) => {
  browserSync.reload();
  done();
}

const images = () => {
  return gulp.src(PATHS.images.src)
  .pipe(imagemin([
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(gulp.dest(PATHS.images.dest))
};

const webp = () => {
  return gulp.src(PATHS.images.webpSrc)
    .pipe(toWebp({quality: 90}))
    .pipe(gulp.dest(PATHS.images.dest))
}

const sprite = () => {
  return gulp.src([PATHS.images.spriteSrc])
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename(PATHS.images.spriteFileName))
    .pipe(gulp.dest(PATHS.images.dest));
}

const php = () => {
  return gulp.src([PATHS.php.src])
    .pipe(gulp.dest(PATHS.php.dest));
}

const build = gulp.series(clean, fonts, sprite, html, styles, js, images, webp, php);
const start = gulp.series(build, server);

exports.build = build;
exports.start = start;

