// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("Fazendo Ligação!")
//         }
//     }
// }
// const celular1 = criarCelular('Zenfone', 5.5, 5000);
// console.log(celular1);

// function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria,
//     this.ligar = function(){
//         console.log('Fazendo Ligação!');
//     }
// }
// const celular = new Celular('asus', 5.5, 5000);
// console.log(celular);

function Televisao(marcaTelevisao, tamanhoTela,tecnologia4k){
    this.marcaTelevisao = marcaTelevisao,
    this.tamanhoTela = tamanhoTela,
    this.tecnologia4k = tecnologia4k,
    this.ligar  = function (){
        console.log("ligando!");
    }
}
const Televisao = new Televisao(LG, 42, 4k);
console.log(Televisao);