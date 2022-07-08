export const findFirstElement = (list) => {
  if (!Array.isArray(list)) return undefined;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element % 2 === 0) return element;
  }
  return undefined;
};

// console.log(findFirstElement([1, 2, 3, 5]));

//v2
export const findFirstElementv2 = (list, conditionFn) => {
  if (!Array.isArray(list) || typeof conditionFn !== 'function') return undefined;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (conditionFn(element, i)) return element;
  }

  return undefined;
};

// const conditionMethod = (element) => element % 2 === 0;

// console.log(findFirstElementv2([1, 2, 3, 5], conditionMethod));
// console.log(findFirstElementv2([1, 2, 3, 5], (element) => element % 2 === 0));
