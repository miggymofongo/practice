

/** This is an explainer of how promises work based on udemy's
 * JS under the hood course
 * 
 * 
 * Everything in JS is an object, and this includes promises.
 * 
 * 
 * Promises in JS can be conceptualized as a server in a restaurant
 * that takes your order 
 * A promise object itself doesn't do any of the work, it just 
 * represents the value returned from an executor function 
 * (the code inside a promise) and then figuring out
 * what to do with it after.
 * 
 * the executor function does the work (i.e. request data
 * from database or run setTimeout) by employing different 
 * methods
 * 
 * promise objects are in 1 of 3 states: pending, fulfilled, or
 * rejected. 
const PENDING = 0
const FULLFILLED = 1;
const REJECTED = 2;


function CustomPromise(executor) {


    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];


/**
 * this function will get called by (executor)
 * and it's value will be fed into the promise object. 
 * 
 * the if statement is telling me as long as the job is
 * NOT pending, meaning that the job completed successfully
 * or failed, it will return a value. 
 * 
 * then i need to feed the result into each handler, declared
 * as an array above. 
 * 
 * the forEach method feeds the value to each handler(h) and
 * does the work of the executor function, completing the job
 * and setting that future value as the promise.
 * , 
 * 
*      
    function resolve(result) {
        if (state !== PENDING) return;

        state = FULLFILLED;
        value = result;

        handlers.forEach((h) => h(value));

    }

    /**
     * here I set up a function to handle and errors that 
     * might come up
     * 
     

    function reject(err) {
        if (state !== PENDING) return;

        state = REJECTED;
        value = err

        catches.forEach((c) => c(err));
    }

    this.then = function (callback) {
        if (state === FULLFILLED) {
            callback(value);
        } else {
            handlers.push(callback);
        }
    }

    executor(resolve, reject);

}


const doWork = (res, rej) => {

    setTimeout(() => { res("Hola Mundo") }, 1000);
}

let someText = new CustomPromise(doWork);

someText.then((val) => {
    console.log("1st log: " + val);
});

someText.then((val) => {
    console.log("2nd log: " + val);
});

setTimeout(() => {
    someText.then((val) => {
        console.log("3rd log: " + val);
    });
}, 3000);


 * 
 * 
 */


/**going to start again down here
 * 
 * here i am practicing using fetch then and catch 
 * to fetch a random recipe fromm the spoonacular api
 * 
 * i use p5js to create a p element in the dom
 * that displays the instructions from the recipe
 * in the dom
 */


/**
 * declare two var to hold my api key and the 
 * url to the api with the key interpolated in 
 * that thang */

let key = "de880224c9e143838a6cf355d6f3f6df"
let foodapi = `https://api.spoonacular.com/recipes/random?apiKey=${key}`


/**i'm using p5js to display the info in the dom.
 * the setup function sets a code block to run once 
 * when the sketch starts running. It's used to perform
 * setup tasks such as creating the canvas
 * or initialize variables.
 */
function setup() {
    noCanvas(); // prevents a canvas from being drawn by default
    fetch(foodapi) // fetching the data from the api
        .then(response => response.json()) //when I get the info, transform it into json
        .then(data => { //then, use the data 
            const recipe = data.recipes[0]; //assign the recipe element of the return data to recipe var
          createP(recipe.instructions); //creates a paragraph element on the dom with the instructions of the recipe
          createImg(recipe.image) // creates an img tag with the image of the recipe
          
        })
            
            
        .catch(err => console.log(err));
    
}