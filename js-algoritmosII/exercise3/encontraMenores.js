

const listaLivros = require("./array");

function encontraMenores(pivo, array, pivoIndex) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }
  trocaLugar(array, pivoIndex, menores);
  return array;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

function divideNoPivo(array) {
  let pivoIndex = Math.floor(array.length / 2);
  let pivo = array[pivoIndex];
  encontraMenores(pivo, array, pivoIndex);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if (atual.preco < pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }
  return array;
}
console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar
