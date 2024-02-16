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


