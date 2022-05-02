'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
  this._length = 0

}
BinarySearchTree.prototype.insert = function (value) {
  var newNode = value;
  var root = this.value;
  if (newNode == root) return "El dato ya existe";
  if (newNode > root) {
    if (this.right === null) this.right = new BinarySearchTree(value);
    else this.right.insert(newNode); // si existe recursion 
  } else if (newNode < root) {
    if (this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(newNode);  // si existe recursion
  } return this._length++
}

BinarySearchTree.prototype.contains = function (value) {
  var root = this.value;
  if (value === this.value) return true;
  if (value > root) {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  }
  if (value < root) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  }
  else return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, opcion) { 
  if (!opcion || opcion === 'in-order') {
    if (this.left) {
      this.left.depthFirstForEach(cb, opcion)
    }
    cb(this.value)
    if (this.right) {
      this.right.depthFirstForEach(cb, opcion)
    }
  }
  else if (!opcion || opcion === 'pre-order') {
    cb(this.value)
    if (this.left) {
      this.left.depthFirstForEach(cb, opcion)
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, opcion)
    }
  }
  else if (!opcion || opcion === 'post-order') {
    if (this.left) {
      this.left.depthFirstForEach(cb, opcion)
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, opcion)
    }
    cb(this.value)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  if (!array) array = [];
  if (this.left) array.push(this.left)
  if (this.right) array.push(this.right)
  cb(this.value) 
}
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
    else if (this.left && this.right) return 1 + this.left.size() + this.right.size();
    else if (this.left) return 1 + this.left.size();
    else if (this.right) return 1 + this.right.size();
}

//let newBst = new BinarySearchTree(10);
//newBst.insert(9)
//newBst.insert(12)
//newBst.insert(15)
//newBst.insert(3)
//console.log(newBst)
//console.log(newBst.contains(2))
//console.log(newBst.size())
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
