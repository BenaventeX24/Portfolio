const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
var concatCss = require("gulp-concat-css");

gulp.task("minifyCss", () => {
  return gulp
    .src([
      "styles/*.css",
      "styles/facts/*.css",
      "styles/intro/*.css",
      "styles/tech-list/*.css",
      "styles/path/*.css",
      "styles/pres-text/*.css",
    ])
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("mergeCss", function () {
  return gulp
    .src("dist/*.css")
    .pipe(concatCss("bundle/bundle.css"))
    .pipe(gulp.dest("dist/"));
});
