//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// aca agrega el console para ver nombreCompleto
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.nombreCompleto() );

// aca modifico el nombre del primer objeto
padre.nombre = 'Carlos';

// aca muestra en pantalla que el cambio no afecto al objeto madre
console.log( padre );
console.log( madre );

let miObjeto = new Object();
let miObjeto2 = {};
// Lo siguiente lo agregue yo
console.log(miObjeto)
console.log(miObjeto2)
console.log(typeof miObjeto)
console.log(typeof miObjeto2)

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';
// Lo siguiente lo agregue yo
console.log(miCadena1)
console.log(miCadena2)
console.log(typeof miCadena1)
console.log(typeof miCadena2)

let miNumero = new Number(1);
let miNumero2 = 1;
// Lo siguiente lo agregue yo
console.log( miNumero );
console.log( miNumero2 );
console.log( typeof miNumero );
console.log( typeof miNumero2 );


let miBoolean = new Boolean(false);
let miBoolean2 = false;
// Lo siguiente lo agregue yo
console.log( miBoolean );
console.log( miBoolean2 );
console.log( typeof miBoolean );
console.log( typeof miBoolean2 );

let miArreglo1 = new Array();
let miArreglo2 = [];
// Lo siguiente lo agregue yo
console.log( miArreglo1 );
console.log( miArreglo2 );
console.log( typeof miArreglo1 );
console.log( typeof miArreglo2 );

let miFuncion = new Function();
let miFuncion2 = function(){};
// Lo siguiente lo agregue yo
console.log( miFuncion );
console.log( miFuncion2 );
console.log( typeof miFuncion );
console.log( typeof miFuncion2 );
