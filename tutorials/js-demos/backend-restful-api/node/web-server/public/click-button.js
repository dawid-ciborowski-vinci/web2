"use strict";
let btn1 = document.getElementById("myBtn1");
let btn2 = document.querySelector("#myBtn2");
let btn3 = document.querySelectorAll("button")[2];

btn1.onclick = function () {
  btn1.innerText = "You clicked on me : )";
  console.log("btn.onclick::anonymous function");
};

function onClickHandlerForBtn2() {
  btn2.innerText = "I have been clicked";
  console.log("onClickHandlerForBtn2::click");
}
btn2.addEventListener("click", onClickHandlerForBtn2);

function onClickHandlerForBtnExtra() {  
  console.log("onClickHandlerForBtnExtra::click");
}

function onClickHandlerForBtn3() {
  btn3.innerText = "I have also been clicked";
  console.log("onClickHandlerForBtn3::click");
}
btn3.addEventListener("click", onClickHandlerForBtn3);
btn3.addEventListener("click", onClickHandlerForBtnExtra);

console.log("global::variables set");
