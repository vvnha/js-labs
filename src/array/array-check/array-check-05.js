export const hasFalsy = (arr) => {
  if (!Array.isArray(arr) || arr?.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!value) return true;
  }
  return false;
};

// export const hasFalsyv2 = (arr) => {
//   if (!Array.isArray(arr) || arr?.length === 0) return false;

//   return arr.some((x) => !x);
// };

export const hasFalsyv2 = (arr) => {
  if (!Array.isArray(arr) || arr?.length === 0) return false;

  return arr.findIndex((x) => !x) > -1;
};
