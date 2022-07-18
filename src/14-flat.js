function flat(array, depth = 0) {
  if (depth === 0) return array;
  let newArray = [];

  let i = 0;

  while (i < array.length) {
    if (Array.isArray(array[i])) newArray.push(...array[i]);
    else newArray.push(array[i]);
    i++;
  }

  newArray = flat(newArray, depth - 1);

  return newArray;
}

function flatMap(array, callbackFn) {
  let newArray = [];

  let i = 0;

  while (i < array.length) {
    newArray.push(...callbackFn(array[i]));
    i++;
  }

  return newArray;
}

const abc = [1, 2, 3, 4];

console.log(flatMap(abc, (x) => [[x * 2]]));
