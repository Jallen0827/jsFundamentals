// //Expressions

// //Declaration
// function hi(){
//     console.log('HI!');
// // }
// // // vs.


// // let hey = function hi(){ //expression function
// //     console.log('hi');
// // }

// // //The variable 'hey' is now representative of the function 'hi()';

// // //ANONYMOUS FUNCTION

// // let hi = function(){
// //     console.log('Hey!');
// // }

// // console.log(hi);

// let fizzBuzz = (num)=>{
//     for(let i=0; i<=num; i++){
//     switch(true){
//         case (i%15==0):
//             console.log('FizzBuzz');
//             break;
//         case (i%5==0):
//             console.log('Buzz');
//             break;
//         case (i%3==0):
//             console.log('Fizz');
//             break;
//         default:
//             console.log(i);
//     }
// }   
// }

// fizzBuzz(100);

let fizzBuzz = (num)=>{
    for(let i=1; i<num;i++){
    (i%15==0)?console.log('FizzBuzz')
    :(i%3==0)?console.log('Fizz')
    :(i%5==0)?console.log('Buzz')
    :console.log(i)}
}

fizzBuzz(101)