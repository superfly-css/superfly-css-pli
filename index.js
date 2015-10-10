module.exports = PLI = {
  SOURCE: './src/',
  TARGET: './target/',
  src: {
    main: {
      css: this.SOURCE + 'main/css',
    },
    test: {
      js: this.SOURCE + 'test/js',
      css: this.SOURCE + 'test/css',
      html: this.SOURCE + 'test/html'
    }
  },
  target: {
    main: {
      js: this.TARGET + 'main/js',
      css: this.TARGET + 'main/css',
      html: this.TARGET + 'main/html'
    },
    test: {
      js: this.TARGET + 'test/js',
      css: this.TARGET + 'test/css',
      html: this.TARGET + 'test/html'
    }
  }
}
