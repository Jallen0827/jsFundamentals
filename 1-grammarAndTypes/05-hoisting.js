let scissors = 'blue';

console.log(scissors);

b();
 console.log(a);

 function b(){
     console.log('this is all hoisted!');

 }

 var a = 8;

 //Take away: Functions get hoisted but variables don't!!
 //Hoisting does not exist. It is an illusion. Code doesn't actually get moved. 
 //JS reads through code twice remembering left hand side variables and functions. 
