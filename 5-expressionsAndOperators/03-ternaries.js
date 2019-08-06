/* Ternary */

let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false); //(if condition) ? true : false 
let number = 6;
(number == 0) ? console.log('It is a zero') :
    (number >= 5) ? console.log('Number is bigger than five') :
        (number < 0) ? console.log('Number is smaller than zero') : console.log('nope');

for (age = 17; age < 26; age++) {
    (age >= 25) ? console.log('Yay! You can rent a car!') :
        (age >= 21) ? console.log('Yay, You can drink!') :
            (age >= 18) ? console.log('Yay! You can vote!') :
                (age <= 17) ? console.log('Sorry, You are to young to do anything') :
                    console.log('Nope');
}

