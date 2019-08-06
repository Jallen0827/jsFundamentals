// Switch

let friend = 'Autmn';

switch (friend) {
    case 'Autumn':
        console.log('Hey Autumn'); 
        break;
    case 'Dave':
        console.log('Hey Dave');
        break;
    case 'Alex': 
        console.log('Hey Alex')
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`) //${variable_name}
}

let dessert = ['pie', 'cake', 'ice cream', 'tea'];
let arrayLength = dessert.length;


for (i=0; i < arrayLength; i++){
    switch(dessert[i]){
        case 'pie':
            console.log(`${dessert[i]}, ${dessert[i]}, me oh my!`);
            break;
        case 'cake':
            console.log(`${dessert[i]} is great!`);
            break;
        case 'ice cream':
            console.log(`I scream for ${dessert[i]}!`)
            break;
        default:
            console.log('Not on the menu...')
    }
}

let age = 19;

for (age=17; age < 26; age++){
    switch(true){
        case age >= 25:
            console.log(`Yay you're ${age}! You can rent a car`);
            break;
        case age >= 21: 
            console.log(`Yay you're ${age}! You can drink!`);
            break;
        case age >= 18:
            console.log(`Yay you're ${age}! You can vote!`);
            break;
        default:
            console.log(`Sorry, you\'re only ${age} and you are to young to do anything`);
    }
}