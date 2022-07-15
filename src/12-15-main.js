function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node === null) return newNode;

    if (node.key === key) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }

  function findMin(node) {
    if (node === null) return null;

    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  function search(node, key) {
    if (node === null) return null;

    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  }

  function getMaxNodesCount(node) {
    if (node === null) return 0;

    const leftNodesCount = getMaxNodesCount(node.left);
    const rightNodesCount = getMaxNodesCount(node.right);

    return leftNodesCount > rightNodesCount ? leftNodesCount + 1 : rightNodesCount + 1;
  }

  function getHeight() {
    const maxNodesCount = getMaxNodesCount(root);

    return maxNodesCount > 0 ? maxNodesCount - 1 : 0;
  }

  function printNodesAtLevel(node, level) {
    if (node === null) return;

    if (level === 0) {
      console.log(node.key);
      return;
    }
    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }
  // https://www.geeksforgeeks.org/level-order-tree-traversal/
  function bfs() {
    const height = getHeight();
    for (let i = 0; i <= height; i++) {
      printNodesAtLevel(root, i);
    }
  }

  function printInOrder(node) {
    if (node === null) return;

    printPostOrder(node.left);
    console.log(node.key);
    printPostOrder(node.right);
  }
  function printPreOrder(node) {
    if (node === null) return;

    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
  }
  function printPostOrder(node) {
    if (node === null) return;

    printPreOrder(node.left);
    printPreOrder(node.right);
    console.log(node.key);
  }

  function remove(node, key) {
    if (node === null) return null;
    // find key
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }

    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    //if no child
    if (node.left === null && node.right === null) return null;

    //if 1 child
    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    // if 2 children
    const minNode = findMin(node.right);

    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);

    return node;
  }

  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodesCount,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
  };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.findMin(binarySearchTree.root));
// console.log(binarySearchTree.search(binarySearchTree.root, 15));
// console.log(binarySearchTree.getMaxNodesCount(binarySearchTree.root));
// console.log(binarySearchTree.getHeight());
console.log(binarySearchTree.bfs());
console.log(binarySearchTree.printInOrder(binarySearchTree.root));
