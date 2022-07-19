function countdown(seconds) {
  let currenSecond = 0;

  const intervalId = setInterval(() => {
    if (seconds - currenSecond <= 0) clearInterval(intervalId);
    console.log(seconds - currenSecond);
    currenSecond++;
  }, 1000);
}

// countdown(5);

function printClock() {
  return setInterval(() => {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  }, 1000);
}

const intervalId = printClock();
// will start to log
// eg: 07:30:15

// until I call clearInterval
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
