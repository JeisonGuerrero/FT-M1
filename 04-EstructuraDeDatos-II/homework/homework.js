'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.


function LinkedList() {
  // var list = {}
  this.head = null;
  this._length = 0;


}

function Node(data) {
  this.value = data;
  this.next = null;

}
LinkedList.prototype.add = function (data) {
  var node = new Node(data)
  var current = this.head
  if (current === null) {
      this.head = node
      this._length++
      return node
  }
  while (current.next) {
      current = current.next
  }
  current.next = node
  this._length++
  return node
}

LinkedList.prototype.remove = function () {
  var current = this.head
  if (current === null) {
      return null
  }
  if (current.next == null) {
      const removeValue = current.value
      this.head = null
      this._length--
      return removeValue
  }
  var valorEliminado = null
  while (current.next) {
      if (current.next.next === null) {
          valorEliminado = current.next.value
          break

      }
      current = current.next
  }
  current.next = null
  this._length--
  return valorEliminado
}

LinkedList.prototype.search = function (value) {
  var current = this.head
      while (current) {
      if ( current.value === value || (value instanceof Function && value(current.value) )) return current.value
      current = current.next
  }
return null

}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.array = []
  // let index = 0
  this.numBuckets = 35


  this.set = function (key, value) {
    // array[this.hash(val)] = value
    let indice = this.hash(key);
    // let toThrowError = TypeError()
    if (indice === 0) throw TypeError("Keys must be strings")
    if (!this.array[indice]) {
      this.array[indice] = {};
    }
    this.array[indice][key] = value
    // return this.array[indice]
  };
  
  
  this.get = function (key) {
    // this.set(key, value)
    let indice = this.hash(key);
    if (!this.array[indice]) {
      return null
    }
    return this.array[indice][key]
  };
  
  
  this.hasKey = function (key) {
   return !!this.get(key)
  };
  
  
  this.hash = function (key){
    let reference = 0
    
      for (let i = 0; i < key.length; i++) {
      reference += key.charCodeAt(i)
      }
    // index = 
    return reference%this.numBuckets
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
