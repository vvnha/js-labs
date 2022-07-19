function log() {
  console.log('tadaa!!');
}

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return;

    isThrottling = true;
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
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
