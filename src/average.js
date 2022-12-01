/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let sum = 0;
  let div = arr.length + 1;
  let num;
  for (let i = 0; i < arr.length; i += 1) {
    num = arr[i];
    if (typeof (num) === 'number') {
      arr[i] = Math.round(num);
      sum += arr[i];  
    } else {
      sum = undefined;
      return sum;
    }
  }
  if (div <= 1) {
    return undefined;
  } 
    return Math.round(sum / arr.length);
};
  
module.exports = average;
