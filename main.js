const BinarySearchTree = require('./BST');

function main() {
  let arr = [2, 1, 3, 4];
  let string = 'EASYQUESTION';
  let BST = new BinarySearchTree();
  arr.forEach(num => {
    BST.insert(num, num);
  });
  //BST.print()

  //console.log(BST.tree(BST))
  //console.log(BST.height())

  // console.log(BST.isItABST());

  //console.log(BST.thirdLargest());

  if (BST.balanced() === 1) {
    console.log('is balanced');
  } else {
    console.log('not balanced');
  }
}
//drill 4
// finds the sum of all nodes, runtime is O of N

//main();

function isSame(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  // console.log(arr1);
  // console.log(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (!arr1[i + 1] && arr2[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSame([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]));
