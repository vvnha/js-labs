const createLinkedList = () => {
  let head = null;
  const insertHead = (newData) => {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  };

  const getHead = () => head;

  const getTail = () => {
    if (head === null) return null;

    let tail = head;
    while (tail.next !== null) {
      tail = tail.next;
    }

    return tail;
  };

  const getSize = () => {
    if (head === null) return 0;
    let count = 0;

    let current = head;
    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  };

  const findIndexByData = (data) => {
    if (head === null) return -1;
    let i = 0;

    let current = head;
    while (current !== null) {
      if (current.data === data) return i;

      i++;
      current = current.next;
    }

    return -1;
  };

  const findWithCallback = (callback) => {
    if (head === null) return undefined;
    let i = 0;

    let current = head;
    while (current !== null) {
      if (callback(current.data, i)) return current.data;

      i++;
      current = current.next;
    }

    return undefined;
  };

  const printList = () => {
    if (head === null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  };

  const removeHead = () => {
    if (head === null) return null;

    head = head.next;
    return head;
  };

  const removeTail = () => {
    if (head === null) return null;

    if (head.next === null) {
      head = null;
      return head;
    }

    let current = head;
    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;

    return head;
  };

  const removeAtPosition = (position) => {
    if (head === null) return null;

    if (head.next === null) {
      head = null;
      return head;
    }

    let current = head;
    let prev = head;
    let i = 0;

    while (current.next !== null && i < position) {
      prev = current;
      current = current.next;
      i++;
    }

    prev.next = current.next;

    return head;
  };

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
    while (current !== null && i < position) {
      pre = current;
      current = current.next;
      i++;
    }

    newNode.next = current;
    pre.next = newNode;

    return head;
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallback,
    insertHead,
    printList,
    removeHead,
    removeTail,
    removeAtPosition,
    insertBeforePosition,
  };
};

const temp = createLinkedList();

temp.insertHead(5);
temp.insertHead(4);
temp.insertHead(3);

temp.printList();
console.log('______________');
console.log(temp.getSize());
console.log(temp.getTail());
console.log('______________');
console.log(temp.findIndexByData(4));
console.log(temp.findWithCallback((x, idx) => x % 2 === 0));
console.log('______________');
temp.removeAtPosition(1);
temp.printList();
