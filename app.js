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



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var pet = {
    name: "",
    trimmedNails: false,
    brushedFur: false,
    trimNails: function() {
        this.trimmedNails = true
    },
    brushFur: function() {
        this.brushedFur = true
    },
    setName: function(callback) {
      readline.question("What do you want to name your pet?", (name) => {
        this.name = name;
        console.log(`Pet's name set to: ${this.name}`);
        readline.close();
        if (callback) callback();
      })
    }
}

let dog = Object.create(pet);

dog.setName(() => {
    console.log(`The pet's name is now set to: ${dog.name}`);
})


