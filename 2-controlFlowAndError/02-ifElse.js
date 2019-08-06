let weather = 75;

if( weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket')
}

let weather = 70;
if (weather < 75 && weather > 55){
    console.log('Wear light jacket');
}else {
    console.log('Number is not in range')
};

let name = 'Justin';

function nameCheck(name){

if (name === 'Justin'){
    console.log('Hello, my name is', name);
} else {
    console.log('Hello, is your name ' + name +'?');
}
}

nameCheck('Justin');

let name = 'aUTuMN';

if (name[0] === name[0].toUpperCase()){
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase()); 
}

if (firstLetter[0] === firstLetter[0].toUpperCase()){
    console.log(firstLetter[0]);
} else {
    console.log(firstLetter.slice(1).toString().toLowerCase()); 
}

let name = 'aUTuMN';
let firstLetter = name.split('');

if (firstLetter[0] === firstLetter[0].toUpperCase()){
    console.log(name.toLowerCase());
} else {
    console.log(firstLetter.slice(1).toString().toLowerCase()); 
}




