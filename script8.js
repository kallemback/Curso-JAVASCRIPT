let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let carteiraDeHabilitacao = true;
let PCD = true;
let morarPerto = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho && carteiraDeHabilitacao || PCD && morarPerto;
console.log('pode aplicar ', podeAplicar);

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado', candidatoRecusado); 

