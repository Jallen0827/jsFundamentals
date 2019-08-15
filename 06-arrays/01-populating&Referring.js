// //Arrays

// //Arrays are containers that hold lists of items of various dataTypes.

// let list = ['item1', 'item2', 'item3'];
//     //(1)    (2) (3)
// // 1- Nmae of the array, or list;
// // 2- The Array is inside of these square brackets 
// // 3- each item, regardless of datatype, is separated by commas

// console.log(list[1]);

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']];

// console.log(`Hello ${students[6][2]}, how are you today?`);
// console.log(typeof students); //Says it is an object
// console.log(students instanceof Array); // Gives boolean of true if it is an array

// //Populating Arrays

let food = ['Spaghetti', 'Linguini', 'Chichen Wings', 'Pizza', 'Popcorn'];
food.push('Candy'); // Adds item to end of list
food.splice(1,1, 'Bananas'); 
food.splice(2, 0, 'Sweet Potato Pie');
food.pop();
// food.shift();
food.unshift('Fruit Snacks')

for (pasta of food){
    console.log(pasta);
}


