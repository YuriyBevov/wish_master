const SOURCE_PATH = 'source/';
const BUILD_PATH = 'build/';

const PATHS = {

  fonts: {
    src: `${SOURCE_PATH}fonts/**/*.{woff,woff2}`,
    output: `${BUILD_PATH}fonts/`,
  },

  images: {
    src: `${SOURCE_PATH}img/static/**/*.{png,jpg,svg}`,
    spriteSrc: `${SOURCE_PATH}img/svg-sprite/icon-*.svg`,
    webpSrc: `${SOURCE_PATH}img/static/**/*.{png,jpg}`,
    dest: `${BUILD_PATH}img/static/`,
    spriteFileName: 'svg-sprite.svg',
  },

  html: {
    src: `${SOURCE_PATH}*.html`,
    srcWatch: `${SOURCE_PATH}*.html`,
    dest: BUILD_PATH,
  },

  styles: {
    src: `${SOURCE_PATH}styles/**/*.scss`,
    dest: `${BUILD_PATH}css/`,
    inputFileName: `${SOURCE_PATH}styles/style.scss`,
    outputFileName: 'styles.min.css',
  },

  php: {
    src: `${SOURCE_PATH}php/**/*.php`,
    dest: `${BUILD_PATH}php/`,
  },

  scripts: {
    srcWatch: `${SOURCE_PATH}scripts/**/**/*.js`,
    inputFileName: `${SOURCE_PATH}scripts/index.js`,
    dest: `${BUILD_PATH}`,
  }
};

module.exports = { PATHS, BUILD_PATH }