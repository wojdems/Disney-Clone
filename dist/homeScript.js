// let $movie1 = document.getElementById(`movies-1`);
// let $style = window.getComputedStyle($movie1);
// let matrix = new WebKitCSSMatrix($style.transform);
// console.log("translateX: ", matrix.m41);
// let rightButton = document.getElementsByClassName(`arrow-right`);

import variables from "../scss";

let $rightButton = document.getElementsByClassName("arrow-right");

console.log($rightButton[0]);

$rightButton[0].addEventListener("click", test);

function test() {
  console.log(variables.moviesPosition);
}
