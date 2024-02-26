

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
 * 
 */

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
*  */    
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
     */

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

/**
 * 
 * 
 */