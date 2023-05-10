// velocidade maxima de 70km/h
// a cada 5km/h acima do limite voace ganha um ponto
// match.Floor()
// caso os pontos maior que 12 -> "catrteira suspensa"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    
    if(velocidade <= velocidadeMaxima)
        console.log('ok');

    else{

        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >=12)

            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
}
