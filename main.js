const BinarySearchTree = require('./BST')



function main(){
  let arr = [3,1,4,6,9,2,5,7]
  let string = 'EASYQUESTION'
  let BST = new BinarySearchTree()
  arr.forEach(num => {
    BST.insert(num, num)
  })
  //BST.print()

  //console.log(BST.tree(BST))
  console.log(BST.height())
}
//drill 4
// finds the sum of all nodes, runtime is O of N

main()