/* Scope */

// Local Scope: Indianapolis
// Global Scope: Earth

/* Scope refers to where a variable is defined and accessible.
        -JavaScript has function scope: each funtion creates a new scope
        -Scope determines the visibility of these variables.
        -Variables defined inside a function are not visible from outside the function
*/
var x = 12;

function scope(){
    var x = 33;
    console.log(x);
}

scope();
console.log(x);

var y = 12;

function scopeY(){
    y = 33;
    console.log(y);
}

scopeY();
console.log(y);


//Var vs Let. 

var x = 12;

function varTest(){
    var x = 33; 
    if (1==1){
        var x = 45; 
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);

var x =12

function letTest(){
    var x = 33;
    if(true){
        let x = 45; //Let makes variable only accessible inside if statement.
        console.log(x);
    }
    console.log(x);
}

letTest();
console.log(x);
