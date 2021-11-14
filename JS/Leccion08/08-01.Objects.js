//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );

// aca modifico el nombre del primer objeto
padre.nombre = 'Carlos';

// aca muestra en pantalla que el cambio no afecto al objeto madre
console.log( padre );
console.log( madre );
