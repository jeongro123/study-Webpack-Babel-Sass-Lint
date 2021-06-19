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
        test: /\.css$/, //.js 확장자를 가진 파일마다(이 패턴에 걸리는 애들마다)
        use: ["style-loader", "css-loader"], //이 파일을 실행함 //여러개인경우 배열의 뒤에서부터 순서대로 실행
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/", //앞에 붙일 경로
          name: "[name].[ext]?[hash]", //이름.확장자명 + 쿼리(hash)
          limit: 20000, //20kb //2kb미만의 파일은 base64 문자열로 변환하여 main.js로 들어가고, 그 이상은 file-loader를 통해 dist에 복사한다
        },
      },
    ],
  },
};
