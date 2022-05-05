'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  const pivot = array[Math.floor(Math.random() * array.length)]
  let izq = []
  let der = []
  let mid = []
  for (let value of array) {
    if (value < pivot) {
      izq.push(value)
    }
    else if (value > pivot) { der.push(value) }
    else { mid.push(value) }
  }
  return quickSort(izq).concat(mid.concat(quickSort(der)))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array
  let mitad = Math.floor(array.length / 2);
  let inicio = array.slice(0, mitad);
  let final = array.slice(mitad);
  return merge(mergeSort(inicio),mergeSort(final))
}
function merge(inicio, final) {
  let arr = []
  while (inicio.length && final.length) {
    if (inicio[0] < final[0]) { arr.push(inicio.shift()) }
    else {
      arr.push(final.shift())

    }
  } return arr.concat(inicio.concat(final))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
