function mergeArray(a, b) {
  // your code here
  if (!Array.isArray(a) || !Array.isArray(b) || (a.length === 0 && b.length === 0)) return [];
  if (a.length === 0) return b;
  if (b.length === 0) return a;

  const statistics = {};
  const mergedArray = [...a, ...b];

  for (let i = 0; i < mergedArray.length; i++) {
    const number = mergedArray[i];

    statistics[number] = statistics[number] !== undefined ? statistics[number] + 1 : 1;
  }

  return Object.keys(statistics).map((number) => parseInt(number));
}

function mostFrequent(numberList) {
  // your code here

  if (!Array.isArray(numberList) || numberList === undefined || numberList.length === 0)
    return undefined;

  const statistics = {};
  let mostFrequentNumber = undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    statistics[number] = statistics[number] !== undefined ? statistics[number] + 1 : 1;
    if (statistics[number] > statistics[mostFrequentNumber] || mostFrequentNumber === undefined)
      mostFrequentNumber = number;
  }

  return mostFrequentNumber;
}

console.log(mostFrequent([1]));

function validMountainArray(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length < 3) return false;

  const median = numberList.length / 2;
  let maxValueNumber = numberList[0];
  let hasIncreasingNumber = false;
  let hasDecreasingNumber = false;

  for (let i = 1; i < median * 2; i++) {
    const number = numberList[i];

    if (number > maxValueNumber && hasDecreasingNumber === true) return false;

    if (number < maxValueNumber && hasIncreasingNumber === false) return false;

    if (number > maxValueNumber && hasDecreasingNumber === false) {
      hasIncreasingNumber = true;
    }

    if (number < maxValueNumber && hasIncreasingNumber === true) {
      hasDecreasingNumber = true;
    }

    maxValueNumber = number;
  }

  return hasIncreasingNumber && hasDecreasingNumber;
}

console.log(validMountainArray([0, 1, 2, 1]));

function createLinkedList() {
  let head = null;
  const getHead = () => head;

  function insertBeforePosition(data, position) {
    // your code here
    const newNode = {
      data,
      next: null,
    };
    if (head === null) {
      head = newNode;
      return head;
    }

    if (position <= 0) {
      newNode.next = head;
      head = newNode;
      return head;
    }

    let current = head;
    let pre = current;
    let i = 0;
    let matchPosition = false;
    while (current !== null) {
      if (current.next === null && !matchPosition) {
        matchPosition = true;
        current.next = newNode;
      }

      if (position === i && current.next !== null) {
        newNode.next = current;
        pre.next = newNode;
        matchPosition = true;
      }

      pre = current;
      current = current.next;
      i++;
    }

    return head;
  }

  return {
    insertBeforePosition,
  };
}
const temp = createLinkedList();
temp.insertBeforePosition(1, 0);
temp.insertBeforePosition(2, 1);
temp.insertBeforePosition(3, 2);
temp.insertBeforePosition(0, 1);
console.log(temp.getHead());

function buildCategoryMapV2(categoryList) {
  // your code here
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};

  const map = new Map();

  categoryList.forEach((item) => {
    map.set(item.id, item);
  });

  return map;
}

function createStack() {
  let head = null;

  function push(data) {
    const newNode = {
      data,
      next: null,
    };

    if (head === null) {
      head = newNode;

      return head;
    }

    newNode.next = head;
    head = newNode;

    return head;
  }
  function pop() {
    if (head === null) return undefined;

    const { data } = head;
    head = head.next;

    return data;
  }

  function getHead() {
    if (head === null) return null;
    return head;
  }

  return {
    push,
    pop,
    getHead,
  };
}

function isValidBracketPairs(str) {
  // your code here

  if (str.length <= 0) return true;
  const stack = createStack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const matchingOpenChar = char === '{' || char === '[' || char === '(';
    const matchingCloseChar = char === '}' || char === ']' || char === ')';

    if (stack.getHead() === null && matchingCloseChar) return false;

    if (matchingOpenChar) stack.push(char);
    if (stack.getHead() !== null && matchingCloseChar) {
      const isMatchPairChar =
        (stack.getHead().data === '{' && char === '}') ||
        (stack.getHead().data === '(' && char === ')') ||
        (stack.getHead().data === '[' && char === ']');
      if (isMatchPairChar) stack.pop();
    }
  }

  return stack.getHead() === null;
}

const PIN_LENGTH = 6;

function isValidPIN(pin) {
  // your code here ...
  if (pin.length < PIN_LENGTH || isNaN(pin)) return false;

  const pinString = pin.toString();
  const statistics = {};
  let previousNumber = undefined;
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < pinString.length; i++) {
    const num = parseInt(pinString[i]);
    statistics[num] = statistics[num] !== undefined ? statistics[num] + 1 : 1;

    if (statistics[num] > 2) return false;

    if (previousNumber <= num) isIncreasing = true;
    if (previousNumber >= num) isDecreasing = true;
    if (previousNumber === undefined || num !== previousNumber) previousNumber = num;
  }
  return isIncreasing && isDecreasing;
}

console.log(isValidPIN(123456));
console.log(isValidPIN(2464351));
console.log(isValidPIN(112345));
console.log(isValidPIN(123123));

function binarySearch(studentList, searchName) {
  // your code here
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof searchName !== 'string' ||
    searchName.length === 0 ||
    searchName === ' ' ||
    studentList === undefined ||
    searchName === undefined
  )
    return -1;

  const lowerSearchName = searchName.toLowerCase().trim();

  let left = 0;
  let right = studentList.length - 1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);
    const studentLowerName = studentList[mid].name.toLowerCase().trim();
    if (studentLowerName === lowerSearchName) return mid;

    if (lowerSearchName > studentLowerName) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Bob Tan' },
  { id: 2, name: 'John' },
];

console.log(binarySearch(studentList, 'aliCE'));

console.log(binarySearch(studentList, 'Bob Tan'));

console.log(binarySearch(studentList, 'john'));

console.log(sum(1, 2)); // also works
function sum(a, b) {
 return a + b;
}
console.log(sum(1, 2));
