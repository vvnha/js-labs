function swap(numberList, i, j) {
  const temp = numberList[i];
  numberList[i] = numberList[j];
  numberList[j] = temp;

  return numberList;
}

function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) numberList = swap(numberList, j, j + 1);
    }
  }
  return numberList;
}

function partiton(numberList, left, right) {
  console.log(numberList.slice(left, right));
  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];
  let i = left;
  let j = right;

  while (i < j) {
    while (numberList[i] < pivot) i++;
    while (numberList[j] > pivot) j--;

    if (i < j) swap(numberList, i, j);

    if (i <= j) {
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(numberList, left, right) {
  //   base condition / termination point
  if (left >= right) return numberList;

  const pivotIndex = partiton(numberList, left, right);

  quickSort(numberList, left, pivotIndex - 1);
  quickSort(numberList, pivotIndex, right);

  return numberList;
}

// console.log(quickSort([1], 0, 0));
// console.log(quickSort([1, 2], 0, 1));
// console.log(quickSort([1, 2, 1], 0, 2));
console.log(quickSort([1, 2, 1, 3], 0, 3));
// console.log(quickSort([4, 1, 2, 5], 0, 3));
// console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5));
