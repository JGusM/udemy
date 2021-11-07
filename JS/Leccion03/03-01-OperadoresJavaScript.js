let miNumero = "18";

let edad = Number (miNumero);
console.log( edad );

if ( isNaN(edad)){
    console.log("No es un numero")
}
else{
    let resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar"
    console.log(resultado)    
}



(edad >= 18) ? console.log("Puede votar") : console.log("Muy joven para votar")    



/*
if (edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");
}

*/