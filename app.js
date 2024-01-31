/**  in this lesson I am using object literal syntax to 
create objects on the fly. */

var Miggy = { 
    nombre: 'Miggy', 
    apellido: 'Mofongo',
    direccion: { 
        calle: 'Car. 2',
        ciudad: 'Aguadilla',
        pais: 'Puerto Rico'
    }

};



function saludar(persona) {
    console.log('Hola ' + persona.nombre);
}

function comida(persona){ 

    console.log('Su comida favorita es ' + Miggy.comida);

}
/** these are two functions that will spit out two 
 * greetings
 */
saludar(Miggy);


/**this function is created on the fly using 
 * literal sytax
 */
saludar({ 
    nombre: 'Maria', 
    apellido: 'Almodovar',
})

/**here i use a dot operator to add a new property
 * then object literal syntax to define the property 
 * as an object. 
 */
Miggy.comida = { 
    comida: 'mofongo',
}


