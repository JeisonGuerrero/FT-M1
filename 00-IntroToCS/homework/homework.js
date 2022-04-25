"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  var numeroDecimal = 0;
var longNum = num.length;
for (let i = 0; i < longNum; i++) {
  let posicion = longNum - 1 - i;
  let expo = 2 ** i;
  numeroDecimal += num[posicion] * expo;
}
return numeroDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  var numeroBinaro = "";
  while (num >= 1) {
    numeroBinaro = (num % 2) + numeroBinaro;
    num = Math.floor(num / 2);
  } return numeroBinaro;
};


// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};