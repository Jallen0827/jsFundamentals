//Types

//Booleans
//Booleans can represent: true/false, yes/no, on/off

let i = true;

let j = false;

let on = true;
let off= false;

console.log(on, off);

//Null
//Null is an empty value; -- not 0, not undefined

let empty = null;
console.log(empty);

//Undefined
// Undefined = no value assigned (not even an empty container)

let undef = undefined;
console.log(undef);

let x;
console.log(x);


//Numbers
//

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let round = 9999999999999999;
console.log(round);

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//Objects

let car = {
    color : 'red',
    tire : 4,
    extras : 'A/C and Radio',
    cool : true
};

console.log(car);
console.log(car.color);


//Array

let list = ['item', 'item2', 3];
//  (1)    (2)   (3)
// 1- Name of Array
// 2- Array is inside of square brackets
// 3- each item, regardless of datatype is separated by commas
console.log(list);
console.log(list[0]);

//Addition vs. Concatenation
/*When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
 when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
 -it smashes the values together without trying to synthesize the values */
 
 let firstName = 'Justin';
 let lastName = 'Allen';
 let houseNumber = 3846;
 let street = 'Wyandotte Trl';
 let city = 'Indianapolis,';
 let state = 'IN';
 let zipCode = 46240;
 let lineBreak = '\n';
 let space = ' ';

 console.log(firstName, lastName + lineBreak +
             houseNumber, street + lineBreak + 
             city, state, zipCode         
        );

/*
        Strings - Properties
        ********************
        Properties are qualities associated with a datatype. 
        Strings have properties, or the qualities associated with that string.
        Click to expand inline (7 lines)
        
        
        Jump
        Mark as read (esc)
        Message Input
        */

let myName = 'Justin';
console.log(myName[0]);

console.log(myName.toUpperCase());

let home = 'My home is Indianapolis';
console.log(home.includes('Indi'));

console.log(home.split(''));