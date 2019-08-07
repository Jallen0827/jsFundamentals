//Expressions

//Declaration
function hi(){
    console.log('HI!');
}
// vs.


let hey = function hi(){ //expression function
    console.log('hi');
}

//The variable 'hey' is now representative of the function 'hi()';

//ANONYMOUS FUNCTION

let hi = function(){
    console.log('Hey!');
}

console.log(hi);