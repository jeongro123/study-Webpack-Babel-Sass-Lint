const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        //로더는
        test: /\.js$/, //.js 확장자를 가진 파일마다(이 패턴에 걸리는 애들마다)
        use: [path.resolve("./my-webpack-loader.js")], //이 파일을 실행함
      },
    ],
  },
};
