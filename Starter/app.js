// by value ( primatives )
var a = 3;
var b;

b = a;
a = 2; // because i changed the value of a to
// 2, when i console.log it below it will say
// a = 2 and b equal to 3,  


console.log(a);
console.log(b);

var c = { greeting: 'hi' };
var d;
c.greeting = 'Hello'; //mutate


// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'hey!' //mutate
}

/***   the equal operator set up new memory space
 and make the variables point to the same
place in memory */

 d = c; 

 c = { greeting: 'howdy' }; //right here we change 
 //the value of c.greeting to be Howdy so when we 
 // console.log c and d below, you will get howdy
 // = to c.greeting and Hello = d.greeting.


//changeGreeting(d);
console.log(c);
console.log(d);

