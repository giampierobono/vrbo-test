const path = require("path");
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const BASE_SCSS = path.resolve(__dirname, "scss");
const styleDIST = path.resolve(__dirname, "dist", "css");
const NODE_MODULE_PATH = path.resolve(__dirname, "node_modules");

gulp.task("build", function(resolve) {
  gulp
    .src(path.resolve(BASE_SCSS, "**", "*.scss"), { base: BASE_SCSS })
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed",
        sourceMap: true,
        importer: [
          url => {
            if (url[0] === "~") {
              url = path.resolve(NODE_MODULE_PATH, url.substr(1));
            }

            return { file: url };
          }
        ]
      })
    )
    .on("error", console.error.bind(console))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(styleDIST));
  resolve();
});
