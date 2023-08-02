"use strict";

const gulp = require("gulp");
//const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

const dist = "dist";

gulp.task("copy-html", () => {
  return gulp
    .src("./src/index.html")
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task("copy-assets", () => {
  return gulp
    .src("./src/icons/**/*.*")
    .pipe(gulp.dest(dist + "/icons"))
    .on("end", browsersync.reload);
});

// gulp.task("build-js", () => {
//     return gulp.src("./src/js/main.js")
//                 .pipe(webpack({
//                     mode: 'development',
//                     output: {
//                         filename: 'script.js'
//                     },
//                     watch: false,
//                     devtool: "source-map",
//                     module: {
//                         rules: [
//                           {
//                             test: /\.m?js$/,
//                             exclude: /(node_modules|bower_components)/,
//                             use: {
//                               loader: 'babel-loader',
//                               options: {
//                                 presets: [['@babel/preset-env', {
//                                     debug: true,
//                                     corejs: 3,
//                                     useBuiltIns: "usage"
//                                 }]]
//                               }
//                             }
//                           }
//                         ]
//                       }
//                 }))
//                 .pipe(gulp.dest(dist))
//                 .on("end", browsersync.reload);
// });

gulp.task("build", gulp.parallel("copy-html", "copy-assets"));

gulp.task("default", gulp.parallel("build"));

// gulp.task("build-js", () => {
//     return gulp.src("./src/js/main.js")
//                 .pipe(webpack({
//                     mode: 'development',
//                     output: {
//                         filename: 'script.js'
//                     },
//                     watch: false,
//                     devtool: "source-map",
//                     module: {
//                         rules: [
//                           {
//                             test: /\.m?js$/,
//                             exclude: /(node_modules|bower_components)/,
//                             use: {
//                               loader: 'babel-loader',
//                               options: {
//                                 presets: [['@babel/preset-env', {
//                                     debug: true,
//                                     corejs: 3,
//                                     useBuiltIns: "usage"
//                                 }]]
//                               }
//                             }
//                           }
//                         ]
//                       }
//                 }))
//                 .pipe(gulp.dest(dist))
//                 .on("end", browsersync.reload);
// });

// gulp.task("styles", function () {
//   return gulp
//     .src("src/sass/**/*.+(scss|sass)")
//     .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
//     .pipe(rename({ suffix: ".min", prefix: "" }))
//     .pipe(autoprefixer())
//     .pipe(cleanCSS({ compatibility: "ie8" }))
//     .pipe(gulp.dest("src/css"))
//     .pipe(browserSync.stream());
// });
