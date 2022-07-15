function binarySearch(numberList, target, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  if (right < left) return -1;

  const mid = left + Math.trunc((right - left) / 2);

  if (numberList[mid] === target) return mid;

  if (target > numberList[mid]) {
    return binarySearch(numberList, target, mid + 1, right);
  }

  return binarySearch(numberList, target, left, mid - 1);
}

function binarySearchv2(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === target) return mid;

    if (target > numberList[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
