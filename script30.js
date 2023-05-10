// criar faixas de preço
// opção 1

let faixas = [
    {tooltip: 'ate R$ 700', minimo: 0, maximo:700},
    {tooltip: 'de R$ 700 a R$ 1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$ 1000 ou mais', minimo:1000, maximo: 9999999}
];

//opção 2 (factory function)
function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),
]

//opção 3
function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minino = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('e', 10,20),
    new FaixaPreco('f', 20,30),
    new FaixaPreco('g', 30,40)
];


console.log(faixas);
console.log(faixas2);
console.log(faixas3);

