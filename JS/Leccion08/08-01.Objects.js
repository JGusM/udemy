let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){//agrego los parametros titulo y tel
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel; //no le pone this porque se refiere a la funcion
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de call para usar...
// ...el metodo persona1.nombreCompleto conlos datos del persona2
console.log( persona1.nombreCompleto('Lic.', '11223344') ); //aca pasa los argumentos de la funcion

console.log(persona1.nombreCompleto.call( persona2, 'Ing', '6655443322' )); //aca pasa los argumentos de la funcion