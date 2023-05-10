// if e else

// Se a hora estiver entre 06:00 até as 12:00 = bom dia
// Se estiver entre 12:00 até as 18:00 = boa tarde
// Caso contrário = Boa noite.

let hora = 21;

if(hora > 6 && hora < 12) {
    console.log('Bom dia!');
}
else if(hora >12 && hora < 18){
    console.log('Boa tarde');
}
else {
    console.log('Boa noite!')
}