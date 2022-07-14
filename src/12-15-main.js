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

  return {
    root,
    insert,
    findMin,
    search,
    getMaxNodesCount,
    getHeight,
  };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15]);
console.log(binarySearchTree.root);
console.log(binarySearchTree.findMin(binarySearchTree.root));
console.log(binarySearchTree.search(binarySearchTree.root, 15));
console.log(binarySearchTree.getMaxNodesCount(binarySearchTree.root));
console.log(binarySearchTree.getHeight());
