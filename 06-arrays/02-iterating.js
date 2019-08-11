// Iterating 

//forEach() method. Executes a provided function once for each array element. 

// forEach() has three arguments: currentValue, the index, and the entire array.
// currentValue = the current element being processed in the array
// index = the index of the current element being processed
// array = the array the forEach method was called upon

let food = ['Spaghetti', 'Linguini', 'Chicken wings', 'Pizza', 'Popcorn'];

// food.forEach(f => {console.log(f)});
// food.forEach((f, number) => {console.log(f, number)});
food.forEach((f, number, array)=>{ 
    console.log(`The food is ${f}`)
});

let movie = ['Star Wars', 'Rocky', 'Batman'];

movie.push('Land before time');
movie.splice(2,1,'Something');

// movie.forEach(f=>{console.log(f)});
movie.forEach((f,array) =>{
    f = array;
    console.log(`The movie is ${f}`);
})

console.log(movie);

let arr = [1,2,3,4,5];
console.log(arr instanceof Array);
console.log(arr.toString().split().reverse().toString());

let a = 'String';

console.log(a.reverse());

let arr = [1,2,3,4,5];

if(arr instanceof Array === true){
    let revNum = arr.reverse();
    revNum.forEach(number =>console.log(number))
}






