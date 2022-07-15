function findMissingNumber(numberList, distance) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  let left = 0;
  let right = numberList.length - 1;
  let mid = 0;

  while (left < right) {
    mid = left + Math.trunc((right - left) / 2);

    const validLeftDistance = (numberList[mid] - numberList[left]) / (mid - left);

    if (validLeftDistance === distance) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return numberList[mid] + distance === numberList[numberList.length - 1]
    ? -1
    : numberList[mid] + distance;
}

console.log(findMissingNumber([0, 3, 6, 9, 12, 15, 18], 3));
