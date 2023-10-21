"use strict";
let btn1 = document.getElementById("myBtn1");
const LOOP_ITERATIONS = 1000000000; // 1 billion

const onClickHandlerForBtn1 = () => {
  console.log("onClickHandlerForBtn1::click");
  runBigLoop(isLooped);
};

btn1.addEventListener("click", onClickHandlerForBtn1);

function runBigLoop(callback) {
  const t0 = performance.now();
  for (let index = 0; index < LOOP_ITERATIONS; index++) {
    // do nothing
  }
  const t1 = performance.now();
  const timeInSec = Math.round(t1 - t0);
  callback(LOOP_ITERATIONS, timeInSec);
}

function isLooped(iterations, time) {
  console.log(`duration to loop ${iterations} times : ${time} ms`);
  alert(`duration to loop ${iterations} times : ${time} ms`);
}

