

/* 

??What are function constructors?? 

Function constructors are functions that are called to create new objects. They
asign properties and methods to objects. they take values that 
will be placed when constructing the object

when invoked, the "this" variable is used to point to a new empty object that
is returned from the function automatically.


check out this function Pet that I've written below. It takes name and species as
parameters and console.logs a message "WhoAmI" that interpolates the 
given parameters.

*/

function Pet(name, species, sound) {
    console.log(this);
    this.name = name;
    this.species = species;
    this.sound = sound;
    
    
}

/* 

now that I created a function contructor Pet, I can declare a new variable "dog"
with var and set it equal to a new Pet! the "new" keyword is a js operator that
initializes a new object. "new Pet('Kaido','dog')" calls the Pet function with 
 my dog's name, Kaido, and the species he is, which is a dog, creating a new dog
 object! 

*/



var dog = new Pet('Kaido', 'dog', 'bark');



/*

Now when I console.log(dog), it spits out the message assigned to the "WhoAmI"
method included in the Pet function constructor as well as the new Pet object
with the variables dog and woof. 

*/





var cat = new Pet('Neku', 'cat', 'meow');


/*

how is the prototype set in function constructors? 
it is set automatically!

anytime an object is created via a function constructor, a "prototype" property is 
automatically generated that is used everytime the function constructor is invoked
to create a new object. 

setting methods with this prototype property is a more efficient way to add 
methods to large numbers of objects that are constructed with the function 
constructor because the methods are not added to each individual object, so
it doesn't use as much memory.


below, i added 2 methods to the Pet prototype: 1) getSpeciesandSound and 2) WhoAmI
the method is a function that concatenates the species and sound of whatever
pet object i pass as a value to getSpeciesandSound to tell me what
the pet is and what sound it makes.


*/

Pet.prototype.getSpeciesandSound = function() {

    return `The pet is a ${this.species} ` + "and " + `makes the sound ${this.sound}`;
};

Pet.prototype.whoAmI = function() {
    console.log(`Hi, my name is ${this.name} & I am a ${this.species}! I go ${this.sound}!`)
}
/*

now if i create a new pet, i will be able to call getSpeciesandSound on it without 
going back and adding it to each object individually.


*/

var horse = new Pet('Spirit', 'horse', 'neigh');


/**
 * when i invoke the  and pass in horse, I'll get the  
 * 
 * 
 * 
 */

console.log(horse);

horse.whoAmI();