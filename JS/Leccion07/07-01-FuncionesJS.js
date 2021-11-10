// Declaracion de la funcion
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

// Llamando a la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

// Declaracin Funcion de tipo Expresion
let sumar = function (a, b){ return a + b };

resultado = sumar(1, 2);
console.log(resultado);

(function (a, b){
    console.log("Ejecutando la funcion: " + (a + b));
})(3, 4);

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);