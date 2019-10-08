const BinarySearchTree = require('./BST');

function main() {
  let arr = [2,1,3,4];
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

  if(BST.balanced() === 1){
    console.log('is balanced')
  } else {
    console.log('not balanced')
  }
}
//drill 4
// finds the sum of all nodes, runtime is O of N

main();

