export const remove = (arr, k, n) => {
  if (!Array.isArray(arr) || arr?.length < 0) return [];

  if (k < 0 || k >= arr.length) return arr;

  if (n === undefined) return [];

  const newArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (i >= k && i - k <= n) newArray.pop();
  }

  return newArray;
};

export const removev2 = (arr, k, n) => {
  if (!Array.isArray(arr) || arr?.length < 0) return [];

  if (k < 0 || k >= arr.length) return arr;

  if (n === undefined) return [];

  const newArray = [...arr];

  newArray.splice(k, n);

  return newArray;
};
