const { src, dest, pipe } = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function compileStyles() {
  // src -> sass -> dest
  // reg-ex (regular expressions), * wildcard
  return src("css/*.scss").pipe(sass()).pipe(dest("css"))
}



exports.default = compileStyles;
exports.build = compileStyles;
