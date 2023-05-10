//Cortando arrays


const primeiro = [1,2,3];
const segundo = [4,5,6,7];
// combinar um array
const combinado = primeiro.concat(segundo);
console.log(combinado);

// dividir

const cortado = combinado.slice(1,3);
console.log(cortado);
