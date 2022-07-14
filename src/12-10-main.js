export function createQueue() {
  let head = null;
  let tail = null;

  function getSize() {
    if (head === null) return 0;
    let current = head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  function getFront() {
    if (tail === null) return undefined;

    return tail.data;
  }
  function getBack() {
    if (head === null) return undefined;

    return head.data;
  }
  function enqueue(data) {
    const newNode = {
      data,
      next: null,
      prev: null,
    };
    if (head === null && tail === null) {
      head = newNode;
      tail = newNode;
      return head;
    }

    head.prev = newNode;
    newNode.next = head;
    head = newNode;

    return head;
  }
  function dequeue() {
    if (head === null && tail === null) return undefined;

    if (head.next === null) {
      const { data } = head;
      head = null;
      tail = null;
      return data;
    }

    const { data } = tail;
    tail = tail.prev;
    tail.next = null;
    return data;
  }

  function printQueue() {
    if (head === null) return;
    let current = head;

    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }
  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
    printQueue,
  };
}

// const queue = createQueue();

// console.log(queue.enqueue(1));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(3));
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log('dequeue:', queue.dequeue());
// console.log('dequeue:', queue.dequeue());
// console.log('_________________');
// queue.printQueue();
