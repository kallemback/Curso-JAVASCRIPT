//ARROW FUNCTIONS




const marcas = [
    
    {id:1, nome: 'automatização'},
    {id:2, nome: 'verboComposto'},
    {id:3, nome: 'econoclasta'},
    {id:4, nome: 'hapkido'},
    {id:5, nome: 'idiotizaçãoDaCoisas'},
    {id:6, nome: 'Freya'},
    {id:7, nome: 'grandSiena'},
    {id:8, nome: 'Portifolio'},


];

//console.log(marcar.includes({id:1,nome:'a'}))

//const marca = marcas.find(function(marca){
  //  return marca.nome === 'a';
//});
console.log(marcas.find((marca) => marca.nome === 'automatização' ));
console.log(marcas.find((marca) => marca.nome === 'hapkido' ));
console.log(marcas.find((marca) => marca.nome === 'Portifolio'));