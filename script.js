let count = 0;
let countSec = 0;
let countMin = 0;
const container = document.querySelector(".container");
const main = document.querySelector(".main-cont");

let str;

let myInterval;
function startTimer() {
  myInterval = setInterval(() => {
    count += 1;

    if (count === 100) {
      count = 0;
      countSec += 1;
    }
    if (countSec === 60) {
      countSec = 0;
      countMin += 1;
    }

    let msec = count < 10 ? "0" + count : count;
    let sec = countSec < 10 ? "0" + countSec : countSec;
    let min = countMin < 10 ? "0" + countMin : countMin;
    str = `${min}:${sec}:${msec}`;
    document.getElementById("box").innerText = str;

    document.getElementById("startBtn").style.display = "none";
    document.getElementById("lapBtn").style.display = "block";
    document.getElementById("stopBtn").style.display = "block";
    document.getElementById("resetBtn").style.display = "none";

    container.classList.add("spin");
    container.classList.remove("pause");
  }, 10);
}

function stopTimer() {
  clearInterval(myInterval);
  container.classList.add("pause");
  document.getElementById("stopBtn").style.display = "none";
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("startBtn").style.display = "block";
  document.getElementById("lapBtn").style.display = "none";
}

function lap() {
  const newEle = document.createElement("div");
  newEle.className = "disp";
  newEle.innerText = str;
  main.appendChild(newEle);
}

function resetTimer() {
  count = 0;
  countSec = 0;
  countMin = 0;
  container.classList.remove("spin");
  container.classList.add("pause");
  str = `00:00:00`;
  document.getElementById("box").innerText = str;
  clearInterval(myInterval);
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("lapBtn").style.display = "block";
  document.getElementById("startBtn").style.display = "block";
  document.getElementById("stopBtn").style.display = "none";

  //to remove lap time
  let divs = document.querySelectorAll(".disp");
  divs.forEach(function (div) {
    div.remove();
  });
}
