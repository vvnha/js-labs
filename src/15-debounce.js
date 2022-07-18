function log() {
  console.log('tadaa!!');
}

function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

const dbouncerLog = debounce(log, 500);

dbouncerLog();
dbouncerLog();
dbouncerLog();
