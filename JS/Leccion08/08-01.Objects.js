let persona = {
    nombre: "Juan",
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['apellido']);

// for in Este es un ciclo for que se puede usar para recorrer un objeto
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad] );
}