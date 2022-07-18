function flat(array, depth) {
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

const abc = [1, 2, [1, [2]]];

console.log(flat(abc, 1));
