// import * as math from "./math(module)"; //방법1
// // import {sum} from './math.js';//방법2

// console.log(math.sum(1, 2));

import "./app.css"; //방법1
import nyancat from "./nyancat.jpeg"; //방법2

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src='${nyancat}' />
  `;
});
