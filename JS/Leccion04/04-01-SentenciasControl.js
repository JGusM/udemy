let hora = 4;
let saludo;

if( hora >= 6 && hora <= 11){
    saludo = "Buenos Dias"
}
else if( hora >= 12 && hora <= 18){
    saludo = "Buenos Tardes"
}
else if( hora >= 19 && hora <= 24){
    saludo = "Buenos Noches"
}
else if( hora >= 0 && hora < 6){
    saludo = "Durmiendo"
}
else{
    saludo = "Valor incorrecto"
}
console.log(saludo);