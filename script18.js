const filme = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'copola',
    personagem: 'thor',
    atorprincipal: 'Robert dower junior',
    custoTotal: '1000000'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}