let myTable = document.getElementById("table");

async function add() {
  let response = await fetch("json.json");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let userName = data[i].name;
    let countHour = Number(data[i].hours);
    addData(userName, countHour);
  }
}

function addData(userName, countHour) {
  let tr = document.createElement("tr");

  // add Name
  let tdName = document.createElement("td");
  tdName.innerHTML = userName;
  tr.appendChild(tdName);

  // add Price
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = 20 * countHour;
  tr.appendChild(tdPrice);

  // Start
  let starttd = document.createElement("td");
  starttd.classList.add("btn");
  let startBtn = document.createElement("button");
  startBtn.innerHTML = "Start";
  startBtn.classList.add("start");
  
  // Start Timer
  startBtn.addEventListener("click", () => {
    timer(countHour, tr, tdTimer, starttd, tdPrice);
    startBtn.setAttribute("disabled", "true");
  });
  starttd.appendChild(startBtn);
  tr.appendChild(starttd);

  // Timer
  let tdTimer = document.createElement("td");
  tr.appendChild(tdTimer);

  myTable.appendChild(tr);
}

function timer(countHour, tr, tdTimer, starttd, tdPrice) {
  let milliseconds = countHour * 60 * 60 * 1000;
  tdTimer.classList.add("timer");

  let timer = setInterval(() => {
    let remainingHours = Math.floor(milliseconds / (60 * 60 * 1000));
    let remainingMinutes = Math.floor(
      (milliseconds % (60 * 60 * 1000)) / (60 * 1000)
    );
    let remainingSeconds = Math.floor((milliseconds % (60 * 1000)) / 1000);

    // Display the remaining time
    tdTimer.innerHTML =
      remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";

    // Subtract one second
    milliseconds -= 1000;

    // Less than 20%
    if (milliseconds <= countHour * 0.2 * 60 * 60 * 1000) {
      tdTimer.classList.remove("timer");
      tdTimer.classList.add("timerLess");
    }

    // Check if the timer has reached zero
    if (milliseconds <= 0) {
      clearInterval(timer);

      tr.removeChild(tdTimer);
      tr.removeChild(starttd);
      tdPrice.setAttribute("colspan", "3");
      tdPrice.classList.add("done");
      tdPrice.innerHTML = "Time Out";
    }
  }, 1000);
}

add();