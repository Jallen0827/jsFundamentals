let hi = () => {
    
    console.log('Hello');
}

hi();

// -> NOT THE SAME AS =>
// 1- We need to set the fat arrow function to a variable
// 2- We use the 'fat arrow' to signify its a function

//Block Body
let hi =() =>{
    console.log('Hello');
}

let apples = x =>{
    console.log(`There are ${x} in the basket`);
}

apples(10);
//Concise Body
let hi = () => console.log('Hello');
let apples = x => console.log(`There are ${x} apples in the basket.`);

apples(10);

//More than one parameter will require paretnhesis
//Return (if one-line fat arrow funtoin) is implied

let func = () => console.log('hi'); //This works

// let func = () 
//     => console.log('hi'); This will not work!!!!!!!!