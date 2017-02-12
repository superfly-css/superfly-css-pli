var path = require('path');
var GLOB = require('glob-patterns');

var PLI = {
  SOURCE: './src/',
  TARGET: './target/',
  src: {
    main: {
      js: './src/main/js/',
      css: './src/main/css/',
      html: './src/main/html/',
      nunjucks: './src/main/nunjucks'
    },
    test: {
      js: './src/test/js/',
      css: './src/test/css/',
      html: './src/test/html/',
      nunjucks: './src/test/nunjucks'
    }
  },
  target: {
    main: {
      js: './target/main/js/',
      css: './target/main/css/',
      html: './target/main/html/',
      nunjucks: './target/main/nunjucks'
    },
    test: {
      js: './target/test/js/',
      css: './target/test/css/',
      html: './target/test/html/',
      nunjucks: './target/test/nunjucks'
    }
  }
}

var glob = path.join(PLI.src.test.html, GLOB.ALL_HTML);

PLI.SRC_MAIN_CSS = path.join(PLI.src.main.css, GLOB.ALL_CSS);
PLI.SRC_MAIN_HTML = path.join(PLI.src.main.html, GLOB.ALL_HTML);
PLI.SRC_MAIN_JS = path.join(PLI.src.main.html, GLOB.ALL_JS);
PLI.SRC_TEST_CSS = path.join(PLI.src.test.css, GLOB.ALL_CSS);
PLI.SRC_TEST_HTML = path.join(PLI.src.test.html, GLOB.ALL_HTML);
PLI.SRC_TEST_JS = path.join(PLI.src.test.html, GLOB.ALL_JS);

PLI.TARGET_MAIN_CSS = path.join(PLI.target.main.css, GLOB.ALL_CSS);
PLI.TARGET_MAIN_HTML = path.join(PLI.target.main.html, GLOB.ALL_HTML);
PLI.TARGET_MAIN_JS = path.join(PLI.target.main.html, GLOB.ALL_JS);
PLI.TARGET_TEST_CSS = path.join(PLI.target.test.css, GLOB.ALL_CSS);
PLI.TARGET_TEST_HTML = path.join(PLI.target.test.html, GLOB.ALL_HTML);
PLI.TARGET_TEST_JS = path.join(PLI.target.test.html, GLOB.ALL_JS);

module.exports = PLI;
