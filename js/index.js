// color change button set

document
  .getElementById("color-change-button")
  .addEventListener("click", function () {
    const haxNumber = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += haxNumber[Math.floor(Math.random() * 16)];
    }
    document.getElementById("body").style.background = color;
  });

// currentDate show function start

function showDate() {
  const currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[currentDate.getDay()];
  const date = currentDate.toLocaleDateString();
  document.getElementById("day-name").innerText = `${dayName}`;
  document.getElementById("current-date").innerText = `${date}`;
}
showDate();

// button desabled function start

let myButton1 = document.getElementById("news_1-btn");
let myButton2 = document.getElementById("news_2-btn");
let myButton3 = document.getElementById("news_3-btn");
let myButton4 = document.getElementById("news_4-btn");
let myButton5 = document.getElementById("news_5-btn");
let myButton6 = document.getElementById("news_6-btn");

myButton1.addEventListener("click", function () {
  let disableButton = document.getElementById("news_1-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_1-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    const subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }
});
myButton2.addEventListener("click", function () {
  let disableButton = document.getElementById("news_2-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_2-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    const subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }
});
myButton3.addEventListener("click", function () {
  let disableButton = document.getElementById("news_3-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_3-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    const subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }
});
myButton4.addEventListener("click", function () {
  let disableButton = document.getElementById("news_4-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_4-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    const subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }
});
myButton5.addEventListener("click", function () {
  let disableButton = document.getElementById("news_5-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_5-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    const subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }
});
myButton6.addEventListener("click", function () {
  let disableButton = document.getElementById("news_6-btn");
  let remainingSubValue = document.getElementById("seen-value");
  let remaingSumValue = document.getElementById("unseen-value");
  let convertRemainingSubValue = parseInt(remainingSubValue.innerText);
  let convertRemainingSumValue = parseInt(remaingSumValue.innerText);
  let historyShow = document.getElementById("history");
  let h1 = document.getElementById("news_6-heading");
  const nowTime = new Date();
  if (disableButton.click) {
    disableButton.disabled = true;
    let subValue = convertRemainingSubValue - 1;
    const sumValue = convertRemainingSumValue + 1;
    remaingSumValue.innerText = sumValue;
    remainingSubValue.innerText = subValue;

    let p = document.createElement("p");
    p.innerText = `
    
    You Have Completed the task ${
      h1.innerText
    } at ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()} 
    `;
    historyShow.appendChild(p);

    alert("Board Update Successfull");
  }

  if (convertRemainingSubValue === 1) {
    alert("Congress !!! You have completed Current task");
  }
});

// Clear history Part

let clearHistory = document.getElementById("clear-history-btn");

clearHistory.addEventListener("click", function () {
  let historyClear = document.getElementById("history");
  historyClear.style.display = "none";
});
