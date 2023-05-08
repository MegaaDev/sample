let arrayWords = [
  "DELTA",
  "PRAGYAN",
  "TRICHY",
  "NIT",
  "CODE",
  "WEBDEV",
  "FEST",
  "DESIGN",
  "INDUCT",
  "SPACE",
  "NODE",
  "CANVAS",
  "EXPRESS",
  "DEEP",
  "REACT",
  "GOLANG",
  "JQUERY",
  "MONGO",
  "APPLE",
  "ANDROID",
  "BOTTLE",
  "MOUSE",
];
// let arrayWords = ["BBB", "AAAAA", "CCCC"];
let boolForBooster = false;
let boostBool = false;
let timerForBooster;
let timerForBoosterTime;
let randomWord;
let randomIndex;
let letters;
let boardSelector = document.querySelector(".game-container");
let targetSelector = document.querySelector(".sequence");
let letterX, letterY;
let started = false;
let boolTimer = true;
let velocityX = 0;
let velocityY = 0;
let seconds = 60;
let scoreSelector = document.querySelector(".scoreit .score");
let highscoreSelector = document.querySelector(".scoreit .HighScore");
let timerSelector = document.querySelector(".timer");
let gameBoxSelector = document.querySelector(".gameBox");
let gridSelector = document.querySelector(".game-container");
let resumeButtonSelector = document.querySelector(".resume");
let pauseButtonSelector = document.querySelector(".fa-pause");
let mobilePauseSelector = document.querySelector(".fa-circle-pause");

let colorIndex;
let boolforListener = true;
let boolUp = true;
let boolDown = true;
let boolColor = -1;
let heartNumber = 1;
let heartBool = true;
let score = 0;
let ReloadGameNumber = 0;
let highScore = localStorage.getItem("high-score") || 0;
scoreSelector.textContent = "Score = " + String(score);
highscoreSelector.textContent = "HighScore = " + String(highScore);
let boolForBoosterMega = false;
let speedBoosterMegaX;
let speedBoosterMegaY;
let letterSoundEffect = new Audio("cartoonBite.mp3");
let loseLifeSoundEffect = new Audio("loseLife.mp3");
let bonusSoundEffect = new Audio("bonus.mp3");
let wrongSoundEffect = new Audio("incorrect.mp3");
let bgMusic = new Audio("bgmusic.mp3");
let clickSoundEffect = new Audio("click.wav");
var r = document.querySelector(":root");
let clickSoundBool = true;
r.style.setProperty("--display", "none");
document.querySelector(".fa-volume-high").addEventListener("click", (event) => {
  if (event.target.classList.contains("emptyList")) {
    r.style.setProperty("--display", "block");
    event.target.classList.remove("emptyList");
    clickSoundBool = false;
    clickSoundEffect.play();
    bgMusic.pause();
  } else if (!event.target.classList.contains("emptyList")) {
    r.style.setProperty("--display", "none");
    event.target.classList.add("emptyList");
    clickSoundBool = true;
    clickSoundEffect.play();
    bgMusic.play();
  }
});

bgMusic.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

let arrayOfLetters = [];
let boostBoolTime = false;
let gridX = 40;
let gridY = 40;

let targetX;
let targetY;
targetX = 1;
targetY = 1;
let RedColorBool = false;
let speed = 100;
speed = Math.max(speed, 10);

let speedBoosterX;
let speedBoosterY;

let speedBoosterTimeX;
let speedBoosterTimeY;

let speedBoostBool = false;
let speedBoostTimeBool = false;
let boolVolume = true;
let boolForBoosterTime = false;

document.querySelector(".grid-state-20").addEventListener("click", () => {
  gridX = 20;
  gridY = 20;
  resetAllReloadNoAudio();
  clickSoundEffect.play();

  r.style.setProperty("--grid-template", "repeat(20, 1fr) / repeat(20, 1fr)");
  r.style.setProperty("--mobile-size", "17.5px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});
document.querySelector(".grid-state-30").addEventListener("click", () => {
  gridX = 30;
  gridY = 30;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  r.style.setProperty("--grid-template", "repeat(30, 1fr) / repeat(30, 1fr)");
  r.style.setProperty("--mobile-size", "11.6666667px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});

document.querySelector(".grid-state-40").addEventListener("click", () => {
  gridX = 40;
  gridY = 40;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  r.style.setProperty("--grid-template", "repeat(40, 1fr) / repeat(40, 1fr)");
  r.style.setProperty("--mobile-size", "8.75px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});
document.querySelector(".grid-state-60").addEventListener("click", () => {
  gridX = 60;
  gridY = 60;
  resetAllReloadNoAudio();

  r.style.setProperty("--grid-template", "repeat(60, 1fr) / repeat(60, 1fr)");
  r.style.setProperty("--mobile-size", "5.833333px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});

document.querySelector(".grid-state-menu-20").addEventListener("click", () => {
  gridX = 20;
  gridY = 20;
  resetAllReloadNoAudio();

  r.style.setProperty("--grid-template", "repeat(20, 1fr) / repeat(20, 1fr)");
  r.style.setProperty("--main-size", "30px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});
document.querySelector(".grid-state-menu-30").addEventListener("click", () => {
  gridX = 30;
  gridY = 30;
  resetAllReloadNoAudio();

  r.style.setProperty("--grid-template", "repeat(30, 1fr) / repeat(30, 1fr)");
  r.style.setProperty("--main-size", "20px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});

document.querySelector(".grid-state-menu-40").addEventListener("click", () => {
  gridX = 40;
  gridY = 40;
  resetAllReloadNoAudio();

  r.style.setProperty("--grid-template", "repeat(40, 1fr) / repeat(40, 1fr)");
  r.style.setProperty("--main-size", "15px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});
document.querySelector(".grid-state-menu-60").addEventListener("click", () => {
  gridX = 60;
  gridY = 60;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  r.style.setProperty("--grid-template", "repeat(60, 1fr) / repeat(60, 1fr)");
  r.style.setProperty("--main-size", "10px");

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});

const boosterRandomPosition = () => {
  for (let i = 0; i < 1; i++) {
    speedBoosterX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterY = Math.floor(Math.random() * gridY) + 1;
    if (arrayOfLetters.includes([speedBoosterY, speedBoosterX])) {
      i--;
    }
  }
};

const boosterTimeRandomPosition = () => {
  for (let i = 0; i < 1; i++) {
    speedBoosterTimeX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterTimeY = Math.floor(Math.random() * gridY) + 1;
    if (
      arrayOfLetters.includes([speedBoosterTimeY, speedBoosterTimeX]) &&
      speedBoosterTimeX === speedBoosterX &&
      speedBoosterTimeY === speedBoosterY
    ) {
      i--;
    }
  }
};

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

  if (event.key == "Escape") {
    document.querySelector(".bgBlur").classList.remove("hideIt");
    document.querySelector(".pauseMenu").classList.remove("hideIt");
    bgMusic.pause();
    velocityX = 0;
    velocityY = 0;
    boolforListener = false;
    started = false;
    clearInterval(timerr);
  }
  if (boolforListener) {
    if ((event.key == "ArrowUp" || event.key == "w") && velocityY !== 1) {
      console.log("hellooits");

      velocityX = 0;
      velocityY = -1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.5;
      }
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
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.5;
      }
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
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.5;
      }
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
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.5;
      }
    }
  }
});

document.addEventListener("keyup", () => {});

let timerBool = false;
let timerr;
Array.from(document.querySelectorAll(".arrowit")).forEach((ele) =>
  addEventListener("click", (event) => {
    timerBool = true;
    if (timerBool && boolTimer) {
      timerr = setInterval(timerFunction, 1000);
      console.log(timerr);
    }
    boolTimer = false;

    if (
      event.target.classList.contains("clickup") ||
      event.target.classList.contains("clickdown") ||
      event.target.classList.contains("clickright") ||
      event.target.classList.contains("clickleft")
    ) {
      started = true;
      bgMusic.play();
      bgMusic.volume = 0.5;
    }
    console.log("hi");

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

pauseButtonSelector.addEventListener("click", (event) => {
  clearInterval(timerr);
  clickSoundEffect.play();
  document.querySelector(".bgBlur").classList.remove("hideIt");
  document.querySelector(".pauseMenu").classList.remove("hideIt");
  bgMusic.pause();
  velocityX = 0;
  velocityY = 0;
  boolforListener = false;
  started = false;
});

mobilePauseSelector.addEventListener("click", (event) => {
  clearInterval(timerr);
  clickSoundEffect.play();
  document.querySelector(".bgBlur").classList.remove("hideIt");
  document.querySelector(".pauseMenu").classList.remove("hideIt");
  bgMusic.pause();
  velocityX = 0;
  velocityY = 0;
  boolforListener = false;
  started = false;
});

resumeButtonSelector.addEventListener("click", (event) => {
  clickSoundEffect.play();
  boolforListener = true;
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");

  // started = true;
  timerr = setInterval(timerFunction, 1000);
});

const randomIt = () => {
  randomIndex = Math.floor(Math.random() * arrayWords.length);
  randomWord = arrayWords[randomIndex];
  letters = randomWord.split("");
  // arrayWords.splice(randomIndex, 1);
};

let snakeX = 10;
let snakeY = 20;

const changeFoodPosition = () => {
  letterX = Math.floor(Math.random() * gridX) + 1;
  letterY = Math.floor(Math.random() * gridY) + 1;
};
randomIt();
console.log(letters);
const placeLetters = () => {
  arrayOfLetters = [];
  for (let i = 0; i < letters.length; i++) {
    changeFoodPosition();
    if (
      letterX === snakeX &&
      letterY === snakeY &&
      !arrayOfLetters.includes([letterY, letterX])
    ) {
      i--;
    } else {
      arrayOfLetters.push([letterY, letterX]);
    }
  }
};

placeLetters();

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
    pauseButtonSelector.style.fontSize = "0rem";
    document.querySelector(".irotatePc .fa-solid").style.fontSize = "2.7rem";
    seconds = 0;
    timerSelector.textContent = `00`;
    velocityX = 0;
    velocityY = 0;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    started = false;
    boolforListener = false;
  }

  if (seconds % 20 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterTimeX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterTimeY = Math.floor(Math.random() * gridY) + 1;
    boolForBoosterTime = true;
    setTimeout(() => {
      boolForBoosterTime = false;
    }, 3000);
  }

  if (seconds % 15 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterY = Math.floor(Math.random() * gridY) + 1;
    boolForBooster = true;
    setTimeout(() => {
      boolForBooster = false;
    }, 8000);
  }
  if (seconds % 30 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterMegaX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterMegaY = Math.floor(Math.random() * gridY) + 1;
    boolForBoosterMega = true;
    setTimeout(() => {
      boolForBoosterMega = false;
    }, 7000);
  }
  if (seconds === 0) {
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(resetAllReload, 600);
    } else {
      resetAll();
    }
  }
};
if (timerBool) {
  setInterval(timerFunction, 1000);
}

// document.querySelector(".irotateMobile").addEventListener("click", () => {
//   clickSoundEffect.play();
//   console.log(timerr);
//   bgMusic.pause();
//   bgMusic.currentTime = 0;

//   resetAllReload();

//   clearInterval(timerr);
//   startedTimer = false;
// });
document.querySelector(".irotatePc").addEventListener("click", () => {
  clickSoundEffect.play();
  console.log(timerr);
  bgMusic.pause();
  bgMusic.currentTime = 0;

  resetAllReload();

  clearInterval(timerr);
  startedTimer = false;
});

document.querySelector(".restart").addEventListener("click", () => {
  clearInterval(timerr);
  startedTimer = false;

  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clickSoundEffect.play();
  console.log(timerr);
  bgMusic.pause();
  bgMusic.currentTime = 0;

  resetAllReloadNoAudio();
});

let htmlSelector;
let boolLetter = false;
let boolLoop = false;
let arrayFollow = [[snakeY, snakeX]];
let letterKillCounter = 0;
let arrayOfLettersReversed = [...arrayOfLetters].reverse();
let index = 0;

// setTimeout(() => {
//   speedBoostBool = true;
// }, 10000);

// setTimeout(() => {
//   speedBoostTimeBool = true;
// }, 20000);

let timerForAbitily;

boolForBooster = false;

// const setTimeforBooster = () => {
//   setTimeout(() => {
//     boolForBooster = true;
//     speedBoosterX = Math.floor(Math.random() * gridX) + 1;
//     speedBoosterY = Math.floor(Math.random() * gridY) + 1;
//   }, 10000);
// };
let gridSize;

let boolSet = true;

const gameLoad = () => {
  // gridSize = document.querySelector(".gameBox").style.height;
  // console.log(gridSize);

  // if (gridSize == 450) {
  //   console.log(gridSize);

  //   r.style.setProperty("--mobile-size", "11.25px");
  // } else if (gridSize == "370px") {
  //   r.style.setProperty("--mobile-size", "9.25px");
  // } else if (gridSize == "390px") {
  //   r.style.setProperty("--mobile-size", "9.75px");
  // } else if (gridSize == "340px") {
  //   r.style.setProperty("--mobile-size", "8.5px");
  // } else if (gridSize == "310px") {
  //   r.style.setProperty("--mobile-size", "7.75px");
  // } else if (gridSize == "280px") {
  //   r.style.setProperty("--mobile-size", "7px");
  // }

  snakeX += velocityX;
  snakeY += velocityY;
  htmlSelector = ``;

  if (boolForBooster) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterY}/${speedBoosterX}"><div class="booster"></div></div>`;
  }

  if (boolForBoosterTime) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterTimeY}/${speedBoosterTimeX}"><div class="boosterTime"></div></div>`;
  }

  if (boolForBoosterMega) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterMegaY}/${speedBoosterMegaX}"><div class="boosterMega"></div></div>`;
  }

  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfLetters[i][0] === snakeY && arrayOfLetters[i][1] === snakeX) {
      if (
        document.querySelector(`.letter${i}`).textContent === letters[index]
      ) {
        letterSoundEffect.play();
        RedColorBool = false;
        boolColor++;
        console.log(boolColor);

        index++;
        console.log(letters[letters.length - 1 - i]);
        score += 20;
        colorIndex = index;
        scoreSelector.textContent = "Score = " + String(score);
        console.log(score);
        console.log(document.querySelector(`.letter${i}`).textContent);
        targetValueChanger();
        letterKillCounter++;
        arrayFollow.push([snakeY, snakeX]);
        arrayOfLetters[i] = "";
        console.log(arrayOfLetters);
        speed -= 5;
        speed = Math.max(speed, 20);
        clearInterval(timerTarget);
        startTimer();
      } else {
        wrongSoundEffect.play();
        document.querySelector(`.lettersIt${i}`).classList.add("redLetter");
        RedColorBool = true;
        gameBoxSelector.classList.add("animationAdd");
        setTimeout(() => {
          gameBoxSelector.classList.remove("animationAdd");
        }, 1000);
        timerSelector.style.color = " rgb(153, 0, 0)";
        setTimeout(() => {
          timerSelector.style.color = "white";
        }, 800);
        arrayFollow.unshift([snakeY, snakeX]);
        arrayFollow.unshift([snakeY, snakeX]);
        targetValueChanger();
        seconds -= 4;
        speed = Math.max(speed, 10);
        score -= 10;
        speed -= 7;
        scoreSelector.textContent = "Score = " + String(score);
      }
    }
  }

  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (!arrayOfLetters[i] == "") {
      htmlSelector += `<div class = "letter letter${i}" style="grid-area:${arrayOfLetters[i][0]}/${arrayOfLetters[i][1]}"><div class = "letterBlock" >${letters[i]}</div></div>`;
    }
  }

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
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(resetAllReload, 600);
    } else {
      resetAll();
    }
  } else if (snakeX > gridX) {
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
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(resetAllReload, 600);
    } else {
      resetAll();
    }
  } else if (snakeY < 1) {
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
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(resetAllReload, 600);
    } else {
      resetAll();
    }
  } else if (snakeY > gridY) {
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
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(resetAllReload, 600);
    } else {
      resetAll();
    }
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

  if (
    arrayFollow[0][1] === speedBoosterX &&
    arrayFollow[0][0] === speedBoosterY
  ) {
    console.log("cool");
    speed -= 10;
    speed = Math.max(speed, 10);
    clearInterval(timerTarget);
    startTimer();
    console.log(speed);
    boolForBooster = false;
    bonusSoundEffect.play();
  }

  if (
    arrayFollow[0][1] === speedBoosterTimeX &&
    arrayFollow[0][0] === speedBoosterTimeY
  ) {
    console.log("cool");
    seconds += 10;
    speed += 10;
    speed = Math.max(speed, 10);
    clearInterval(timerTarget);
    startTimer();
    boolForBoosterTime = false;
    bonusSoundEffect.play();
  }

  if (
    arrayFollow[0][1] === speedBoosterMegaX &&
    arrayFollow[0][0] === speedBoosterMegaY
  ) {
    bonusSoundEffect.play();
    if (arrayFollow.length >= 15) {
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
    } else if (arrayFollow.length >= 10 && arrayFollow.length < 15) {
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
    }
    if (arrayFollow.length >= 8 && arrayOfLetters.length < 10) {
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
    } else if (arrayFollow.length < 8 && arrayFollow.length >= 5) {
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
      arrayFollow.pop([snakeY, snakeX]);
    } else if (arrayOfLetters.length >= 2 && arrayOfLetters.length < 5) {
      arrayFollow.pop([snakeY, snakeX]);
    }

    boolForBoosterMega = false;
  }

  for (let i = 3; i < arrayFollow.length; i++) {
    if (
      i !== 0 &&
      arrayFollow[0][0] === arrayFollow[i][0] &&
      arrayFollow[0][1] === arrayFollow[i][1]
    ) {
      console.log(arrayFollow[i]);
      console.log(arrayFollow);

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
      document
        .querySelector(`.heart${heartNumber}`)
        .classList.add("animateHeart");

      setTimeout(() => {
        document
          .querySelector(`.heart${heartNumber - 1}`)

          .classList.add("displayHidden");
      }, 600);

      if (heartBool) {
        heartBool = false;
        heartNumber++;
      }
      ReloadGameNumber++;
      if (ReloadGameNumber === 3) {
        setTimeout(resetAllReload, 600);
      } else {
        resetAll();
      }
    }
  }
  const resetLetters = () => {
    RedColorBool = false;
    boolColor = -1;
    gameBoxSelector.classList.add("animationAddGreen");
    setTimeout(() => {
      gameBoxSelector.classList.remove("animationAddGreen");
    }, 1000);
    timerSelector.style.color = "rgb(18, 236, 2)";
    setTimeout(() => {
      timerSelector.style.color = "white";
    }, 1000);
    index = 0;
    speed += 10;
    speed = Math.max(speed, 10);
    randomIt();
    placeLetters();
    targetValueChanger();
    targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
    targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  };

  if (letterKillCounter === arrayOfLetters.length) {
    resetLetters();
    letterKillCounter = 0;
    seconds += 5;
  }

  boardSelector.innerHTML = htmlSelector;
};

targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
const resetAll = () => {
  loseLifeSoundEffect.play();
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document;
  heartBool = true;

  timerSelector.style.color = "white";
  index = 0;

  speed = 100;
  speed = Math.max(speed, 10);
  snakeX = 10;
  clearInterval(timerTarget);
  startTimer();
  snakeY = 20;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;

  seconds = 61;
  randomIt();
  placeLetters();
  boolColor = -1;

  RedColorBool = false;
  targetValueChanger();

  timerFunction();

  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
};

const resetAllReload = () => {
  loseLifeSoundEffect.play();
  ReloadGameNumber = 0;
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document
    .querySelector(`.heart${1}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${1}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${2}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${2}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${3}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${3}`)

    .classList.remove("animateHeart");
  heartNumber = 1;
  heartBool = true;

  pauseButtonSelector.style.fontSize = "3.5rem";
  document.querySelector(".irotatePc .fa-solid").style.fontSize = "0rem";

  timerSelector.style.color = "white";
  index = 0;
  boolColor = -1;
  RedColorBool = false;
  speed = 100;
  speed = Math.max(speed, 10);
  snakeX = 10;
  clearInterval(timerTarget);
  startTimer();
  snakeY = 20;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;
  score = 0;
  seconds = 61;
  randomIt();
  placeLetters();
  boolColor = -1;
  targetValueChanger();

  timerFunction();

  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
};

const resetAllReloadNoAudio = () => {
  ReloadGameNumber = 0;
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document
    .querySelector(`.heart${1}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${1}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${2}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${2}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${3}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${3}`)

    .classList.remove("animateHeart");
  heartNumber = 1;
  heartBool = true;

  pauseButtonSelector.style.fontSize = "3.5rem";
  document.querySelector(".irotatePc .fa-solid").style.fontSize = "0rem";

  timerSelector.style.color = "white";
  index = 0;
  boolColor = -1;
  RedColorBool = false;
  speed = 100;
  speed = Math.max(speed, 10);
  snakeX = 10;
  clearInterval(timerTarget);
  startTimer();
  snakeY = 20;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;
  score = 0;
  seconds = 61;
  randomIt();
  placeLetters();
  boolColor = -1;
  targetValueChanger();

  timerFunction();

  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
};
let targetHtmlSelector = ``;
let timerTarget;
const startTimer = () => {
  timerTarget = setInterval(gameLoad, speed);
};
startTimer();
const targetValueChanger = () => {
  targetHtmlSelector = ``;
  targetSelector.innerHTML = targetHtmlSelector;

  for (let i = 0; i < letters.length; i++) {
    if (i <= boolColor) {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:green"><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
    } else if (RedColorBool) {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:red"><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
      RedColorBool = false;
    } else {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:white"><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
    }

    targetSelector.innerHTML += targetHtmlSelector;
  }
};
targetValueChanger();
