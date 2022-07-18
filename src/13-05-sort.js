const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 10 } },
  { id: 3, name: 'Bob', marks: { math: 5, english: 10 } },
  { id: 2, name: 'John', marks: { math: 10, english: 10 } },
];

function sortById(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => s1.id - s2.id);
}

function sortByName(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    if (s1.name > s2.name) return 1;
    if (s1.name < s2.name) return -1;

    return 0;
  });
}

function sortByAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    const s1Avg = Object.keys(s1.marks).reduce((avg, subject) => {
      avg += s1.marks[subject] / Object.keys(s1.marks).length;
      return avg;
    }, 0);

    const s2Avg = Object.keys(s2.marks).reduce((avg, subject) => {
      avg += s2.marks[subject] / Object.keys(s2.marks).length;
      return avg;
    }, 0);

    return s1Avg - s2Avg;
  });
}

console.log('sortByAvg', sortByAvg(studentList));

function createCounter() {
  // your code here

  const statistics = {};

  function count(label = 'default') {
    console.log(statistics[label]);
    // statistics[label] = statistics[label] !== undefined ? statistics[label] + 1 : 1;

    console.log(statistics);
    return `${label}: ${statistics[label]}`;
  }

  function resetCount(label = 'default') {
    statistics[label] = 0;
  }

  return {
    count,
    resetCount,
  };
}

const counter = createCounter();

console.log(counter.count());
console.log(counter.count());
