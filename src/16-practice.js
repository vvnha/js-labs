function log() {
  console.log('tadaa!!');
}

function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) return;
    timeoutId = setTimeout(callback, wait);
  };
}

function throttle(callback, wait) {
  let isThrottling = false;
  let timeoutId;

  return function () {
    if (!isThrottling) {
      isThrottling = true;
      timeoutId = setTimeout(() => {
        callback();
        isThrottling = false;
      }, wait);
    }
  };
}

const throttledLog = throttle(log, 500);
// 0 -> 500
throttledLog(); // set timeout 500 --> call --> turn of flag throttle
throttledLog(); // check throttling --> ignore
throttledLog(); // check throttling --> ignore
throttledLog(); // check throttling --> ignore
// 600 --> 1100
setTimeout(throttledLog, 600); // start throttling
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 700);
setTimeout(throttledLog, 700);
