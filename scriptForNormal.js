let boardSelector = document.querySelector(".game-container");
let targetSelector = document.querySelector(".sequence");
let scoreSelector = document.querySelector(".scoreit .score");
let highscoreSelector = document.querySelector(".scoreit .HighScore");
let timerSelector = document.querySelector(".timer");
let gameBoxSelector = document.querySelector(".gameBox");
let gridSelector = document.querySelector(".game-container");
let foodX, foodY;

let gridX, gridY;
gridX = 40;
gridY = 40;

let timerBool = false;
let seconds = 60;
let minutes = 0;

let snakeX = 10;
let snakeY = 20;

let velocityX = 0;
let velocityY = 0;
let started = false;
let boolTimer = true;

let boolforListener = true;
let boolUp = true;
let boolDown = true;

let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
scoreSelector.textContent = "Score = " + String(score);
highscoreSelector.textContent = "HighScore = " + String(highScore);
let arrayOfColors = [
  "#F7D060",
  "#FE6244",
  "#E06469",
  "#FFEAD2",
  "#088395",
  "#643A6B",
  "#B2A4FF",
];

let resetArrayOfColors = [...arrayOfColors];

let maxRandom;
let minRandom;
let targetLength;
let targetLengthChooser = () => {
  maxRandom = 6;
  minRandom = 3;
  targetLength = Math.floor(
    Math.random() * (maxRandom - minRandom + 1) + minRandom
  );
};
let timerr;
let randomNumberForTarget;
const randomNumberPicker = (number) => {
  randomNumberForTarget = Math.floor(Math.random() * number + 1);
};

let targetArraycolors = [];
let targetLengthNumbers = [];
let arrayOfColorsTarget;
const resetTarget = () => {
  targetLengthChooser();

  targetArraycolors = [];
  targetLengthNumbers = [];
  for (let i = 0; i < targetLength; i++) {
    randomNumberPicker(targetLength);
    if (!targetLengthNumbers.includes(randomNumberForTarget)) {
      targetLengthNumbers.push(randomNumberForTarget);
      targetArraycolors[i] = arrayOfColors[randomNumberForTarget];
    } else {
      i--;
    }
  }
  arrayOfColorsTarget = [...targetArraycolors];
};
resetTarget();

console.log(targetArraycolors);
let startedTimer = true;
document.addEventListener("keydown", (event) => {
  timerBool = true;
  if (timerBool && boolTimer) {
    timerr = setInterval(timerFunction, 1000);
  }
  boolTimer = false;

  if (
    event.key == "ArrowUp" ||
    event.key == "ArrowDown" ||
    event.key == "ArrowRight" ||
    event.key == "ArrowLeft" ||
    event.key == "w" ||
    event.key == "a" ||
    event.key == "s" ||
    event.key == "d"
  ) {
    started = true;
  }

  if (boolforListener) {
    if ((event.key == "ArrowUp" || event.key == "w") && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (
      (event.key == "ArrowDown" || event.key == "s") &&
      velocityY !== -1
    ) {
      velocityX = 0;
      velocityY = 1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (
      (event.key == "ArrowRight" || event.key == "d") &&
      velocityX !== -1
    ) {
      velocityX = 1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (
      (event.key == "ArrowLeft" || event.key == "a") &&
      velocityX !== 1
    ) {
      velocityX = -1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    }
  }
});
let timerBoolX = false;
let boolTimerX = false;
Array.from(document.querySelectorAll(".arrowit")).forEach((ele) =>
  addEventListener("click", (event) => {
    timerBool = true;
    if (timerBool && boolTimer) {
      timerr = setInterval(timerFunction, 1000);
      console.log(timerr);
    }
    boolTimer = false;
    boolTimerX = false;
    if (
      event.target.classList.contains("clickup") ||
      event.target.classList.contains("clickdown") ||
      event.target.classList.contains("clickright") ||
      event.target.classList.contains("clickleft")
    ) {
      started = true;
    }

    if (boolforListener) {
      if (event.target.classList.contains("clickup") && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
        if (!startedTimer) {
          timerr = setInterval(timerFunction, 1000);
        }
        startedTimer = true;
      } else if (
        event.target.classList.contains("clickdown") &&
        velocityY !== -1
      ) {
        velocityX = 0;
        velocityY = 1;
        if (!startedTimer) {
          timerr = setInterval(timerFunction, 1000);
        }
        startedTimer = true;
      } else if (
        event.target.classList.contains("clickright") &&
        velocityX !== -1
      ) {
        velocityX = 1;
        velocityY = 0;
        if (!startedTimer) {
          timerr = setInterval(timerFunction, 1000);
        }
        startedTimer = true;
      } else if (
        event.target.classList.contains("clickleft") &&
        velocityX !== 1
      ) {
        velocityX = -1;
        velocityY = 0;
        if (!startedTimer) {
          timerr = setInterval(timerFunction, 1000);
        }
        startedTimer = true;
      }
    }
  })
);

document.querySelector(".irotateMobile").addEventListener("click", () => {
  console.log(timerr);

  resetAll();

  clearInterval(timerr);
  startedTimer = false;
});
document.querySelector(".irotatePc").addEventListener("click", () => {
  console.log(timerr);

  resetAll();

  clearInterval(timerr);
  startedTimer = false;
});
const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * gridX) + 1;
  foodY = Math.floor(Math.random() * gridY) + 1;
};

let htmlSelector;
let boolnow = true;
// htmlSelector = `<div class = "food" style = "grid-area: ${foodY}/${foodX}"></div>`;
// for (let i = 0; i < 5; i++) {
//   changeFoodPosition();
//   htmlSelector += `<div class = "food" style = "grid-area: ${foodY}/${foodX}"></div>`;
// }

let arrayofFood = [];

const timerFunction = () => {
  seconds--;
  if (seconds <= 15) {
    timerSelector.style.color = "red";
  }

  if (seconds < 10 && seconds >= 0) {
    timerSelector.textContent = `0${seconds}`;
  } else if (seconds >= 10) {
    timerSelector.textContent = `${seconds}`;
  } else {
    seconds = 0;
    timerSelector.textContent = `00`;
    velocityX = 0;
    velocityY = 0;

    started = false;
    boolforListener = false;
  }
};
if (timerBool) {
  setInterval(timerFunction, 1000);
}

const placeFood = () => {
  for (let i = 0; i < targetArraycolors.length; i++) {
    changeFoodPosition();
    if (foodX === snakeX && foodY === snakeY) {
      i--;
    } else {
      arrayofFood.push([foodY, foodX]);
    }
  }
};

let arrayFollow = [
  [snakeY, snakeX],
  [snakeY + 1, snakeX],
  [snakeY + 2, snakeX],
];

let haveBorder = 0;
placeFood();

let headBool = true;
const gameLoad = () => {
  snakeX += velocityX;
  snakeY += velocityY;
  htmlSelector = ``;
  for (let i = 0; i < arrayofFood.length; i++) {
    if (arrayofFood[i][0] === snakeY && arrayofFood[i][1] === snakeX) {
      if (
        arrayofFood[arrayofFood.length - 1][0] == snakeY &&
        arrayofFood[arrayofFood.length - 1][1] == snakeX
      ) {
        haveBorder++;
        score += 20;
        scoreSelector.textContent = "Score = " + String(score);
        console.log(score);

        arrayofFood.splice(arrayofFood.length - 1, 1);
        targetArraycolors.splice(0, 1);
        console.log(arrayofFood);
      } else {
        gameBoxSelector.classList.add("animationAdd");
        setTimeout(() => {
          gameBoxSelector.classList.remove("animationAdd");
        }, 1000);
        timerSelector.style.color = " rgb(153, 0, 0)";
        setTimeout(() => {
          timerSelector.style.color = "white";
        }, 800);

        seconds -= 4;
        score -= 10;
        scoreSelector.textContent = "Score = " + String(score);
        console.log(score);
      }
    }
  }

  targetSelector.style.gridTemplateColumns = `repeat(${targetLength},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;

  // for (let i = 0; i < arrayofFood.length; i++) {
  //   if (arrayofFood[i][0] == snakeY && arrayofFood[i][1] == snakeX && ) {
  //     arrayofFood.splice(i, 1);
  //   }
  // }

  if (snakeX < 1) {
    velocityX = 0;
    velocityY = 0;
    seconds = 0;
    started = false;
    boolforListener = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
  } else if (snakeX > 40) {
    console.log("hellooo");
    velocityX = 0;
    velocityY = 0;

    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
  } else if (snakeY < 1) {
    console.log("hellooo");
    velocityX = 0;
    velocityY = 0;
    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
  } else if (snakeY > 40) {
    console.log("hellooo");
    velocityX = 0;
    velocityY = 0;

    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
  } else {
    localStorage.setItem("high-score", highScore);
  }

  if (started) {
    for (let i = arrayFollow.length - 1; i > 0; i--) {
      arrayFollow[i] = arrayFollow[i - 1];
    }
    arrayFollow[0] = [snakeY, snakeX];
  }
  for (let i = 0; i <= arrayFollow.length - 1; i++) {
    if (i === 0) {
      htmlSelector += `<div class = "headsnake" style = "grid-area: ${arrayFollow[i][0]}/${arrayFollow[i][1]}"></div>`;
    } else {
      htmlSelector += `<div class = "snake" style = "grid-area: ${arrayFollow[i][0]}/${arrayFollow[i][1]}"></div>`;
    }
  }
  for (let i = 0; i < arrayofFood.length; i++) {
    htmlSelector += `<div class = "food" style = "grid-area: ${
      arrayofFood[i][0]
    }/${arrayofFood[i][1]};background-color:${
      targetArraycolors[targetArraycolors.length - 1 - i]
    }"></div>`;
  }

  const resetAll = () => {
    console.log("emptty");
    gameBoxSelector.classList.add("animationAddGreen");
    setTimeout(() => {
      gameBoxSelector.classList.remove("animationAddGreen");
    }, 1000);
    timerSelector.style.color = "rgb(18, 236, 2)";
    setTimeout(() => {
      timerSelector.style.color = "white";
    }, 1000);

    seconds += 5;
    resetTarget();
    placeFood();
    haveBorder = 0;
  };

  if (arrayofFood.length === 0) {
    resetAll();
  }

  targetHtmlSelector = ``;
  targetColor();
  boardSelector.innerHTML = htmlSelector;
};

let targetX;
let targetY;
targetX = 1;
targetY = 1;

let targetHtmlSelector = ``;
const targetValueChanger = () => {
  for (let i = 0; i < arrayOfColorsTarget.length; i++) {
    if (i === haveBorder) {
      targetHtmlSelector += `<div class="target haveBorder" style="grid-area:${targetY}/${
        targetX + i
      };background-color:${arrayOfColorsTarget[i]}"></div>`;
    } else {
      targetHtmlSelector += `<div class="target " style="grid-area:${targetY}/${
        targetX + i
      };background-color:${arrayOfColorsTarget[i]}"></div>`;
    }
  }
};

// const resetAllReload = () => {
//   seconds = 60;
//   resetTarget();
//   placeFood();
//   haveBorder = 0;
// };

const targetColor = () => {
  targetValueChanger();

  targetSelector.innerHTML = targetHtmlSelector;
};
targetColor();

changeFoodPosition();
setInterval(gameLoad, 100);
const resetAll = () => {
  boolforListener = true;
  timerSelector.style.color = "white";
  arrayofFood = [];
  snakeX = 10;
  snakeY = 20;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [
    [snakeY, snakeX],
    [snakeY + 1, snakeX],
    [snakeY + 2, snakeX],
  ];
  started = false;
  score = 0;
  seconds = 61;
  timerFunction();
  resetTarget();
  placeFood();
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
};
