const createIterable = (n) => {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: [i, i * 2],
            done: i >= n,
          };

          i++;

          return result;
        },
      };
    },
  };
};

const iterator = createIterable(50);

for (const [num1, num2] of iterator) {
  console.log(num1, num2);
}
