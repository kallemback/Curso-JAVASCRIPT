const marcas = [
    
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},

];

//console.log(marcar.includes({id:1,nome:'a'}))

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);