var math = math || {};

(function () {
  //IIFE
  function sum(a, b) {
    return a + b;
  }
  math.sum = sum; //접근할 수 있도록 변수 생성
})();
