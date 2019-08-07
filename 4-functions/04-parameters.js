//Parameters

function hi(name){
    console.log(name);
    let string;
    for(let na in name){
        console.log(na)
        if( na[0]==0 && name.length < 2){
        string += `Hi ${na}!`;
        } else if (na[0] == 0){
         string += `Hi ${name[na]} `;
        } else{
         string += `and ${name[na]}`;
        }
    }
        console.log(string);
    }


hi(['Justin', 'Zach']);

// function fullName(firstName, lastName){
//     let name = `Hello, my name is ${firstName} ${lastName}!`;
//     console.log(name);
// }

// fullName('Justin', 'Allen');

// function pet(animal){
//     console.log(`My puppy's name is ${animal}`);
// }

// pet('Mo');
