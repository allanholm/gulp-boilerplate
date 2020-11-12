var {  watch, task, parallel } = require("gulp");
var { server } = require("gulp-connect");

var moveHTML = require("./moveHTML");
var processSass = require("./processSass");

function watchEverything() {
  watch("./src/html/**/*.html", 
  { ignoreInitial: false },
  moveHTML);

  watch("./src/sass/**/*.scss", 
  { ignoreInitial: false },
  processSass);
}

function serve() {
  return server({ 
    root: "dist", 
    livereload: true,
    port: 80
  });
}

task("default", parallel(serve, watchEverything));