// let point = 21445;

function largeNumber(point){
let point2 = point.toString().split('').sort();
let point3 = point2.reverse().join('');
// console.log(Number(point3));
// console.log(typeof Number(point3));
    return Number(point3);
}

let x = largeNumber(21445);
console.log(typeof x);

let b = 0;

for (let i = 1; i <= 4; i++){
    let b = i+b;
    console.log(b);
}

let arr = [14, 35, 6, 1, 34, 54];

console.log(arr.sort(function(a, b){return b - a}));



