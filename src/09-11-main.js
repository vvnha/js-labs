export const filter = (list, conditionFn) => {
  if (!Array.isArray(list) || typeof conditionFn !== 'function') return undefined;

  const newList = [];

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (conditionFn(element, i)) {
      newList.push(element);
    }
  }

  return newList;
};

// console.log(filter([1, 2, 3], (x) => x % 2 === 0));
