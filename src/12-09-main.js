export function createStack() {
  let head = null;

  function getTop() {
    if (head === null) {
      return undefined;
    }

    return head.data;
  }

  function getSize() {
    if (head === null) {
      return 0;
    }
    let count = 0;

    let current = head;
    while (current !== null) {
      current = current.next;
      count++;
    }
    return count;
  }

  function isEmpty() {
    if (head === null) {
      return true;
    }

    return false;
  }
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

    let current = head;
    const { data } = current;
    current = head.next;
    head = head.next;

    return data;
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}
