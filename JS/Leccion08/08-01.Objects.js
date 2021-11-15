let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de apply para usar...
// ...el metodo persona1.nombreCompleto conlos datos del persona2
console.log( persona1.nombreCompleto('Lic.', '55443322') );

// con este metodo tiene que pasar antes un arreglo
let arreglo = ['Ing.', ' 11223344'];
console.log(persona1.nombreCompleto.apply( persona2, arreglo ));//aca pasa arreglo

let arreglo = ['Ing.', ' 11223344'];
console.log(persona1.nombreCompleto.apply( persona2, 'Ing.', ' 11223344' )); //aca pasa los valores del arreglo
