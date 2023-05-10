let endereco = {
    Rua: 'Manoel Ferreira Campar',
    Numero: 39,
    Complemento: 'casa03',
    Bairro: 'Posse',
    CEP: 26021061
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}
exibirEndereco(endereco);

