export const insert = (arr, newItem, k) => {
  if (!Array.isArray(arr) || arr?.length < 0) return [];
  if (typeof newItem !== 'number' || typeof k !== 'number') return [];

  const arrLength = arr.length;

  if (k < 0) return [newItem, ...arr];

  if (k > arrLength) return [...arr, newItem];

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (i === k) newArray.push(newItem);
    newArray.push(element);
  }

  return newArray;
};

export const insertv2 = (arr, newItem, k) => {
  if (!Array.isArray(arr) || arr?.length < 0) return [];
  if (typeof newItem !== 'number' || typeof k !== 'number') return [];

  const arrLength = arr.length;
  const newArray = [...arr];

  if (k < 0) {
    newArray.unshift(newItem);
    return newArray;
  }

  if (k > arrLength) {
    newArray.push(newItem);
    return newArray;
  }

  newArray.splice(k, 0, newItem);

  return newArray;
};
