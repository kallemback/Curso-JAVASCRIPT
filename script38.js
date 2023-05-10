// Operador SPREAD


const primeiro = [1,2,3];
const segundo = [4,5,6,7];
// combinar um array
//const combinado = primeiro.concat(segundo);

const combinado = [...primeiro,'a', ...segundo];
console.log(combinado);
//const cortado = combinado.slice();
// dividir
const clonado = [...combinado];
console.log(clonado);


// const cortado = combinado.slice(1,3);
// console.log(cortado);
