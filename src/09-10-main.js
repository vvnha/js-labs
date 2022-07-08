export const map = (list, mappingFunction) => {
  if (!Array.isArray(list) || typeof mappingFunction !== 'function') return undefined;

  const newList = [];

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    newList.push(mappingFunction(element, i));
  }

  return newList;
};

// console.log(map([1, 2, 3], (x) => x * 2));
