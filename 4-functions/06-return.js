//Return

let hi = () => {
    return 'hi';
}

let newName = hi();
    //(2)       (3)

console.log(newName);

//1- The keyword that brings our data out of our function
//2- We need a new variable to hold the value of the return
//3- When called, the function becomes value of the return

let capitalizedName = (name)=>{
    let capName= '';
    for (let letter in name){
        if (letter == 0 ){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    
    }
    return capName;
}

// console.log(capName); error, not defined

const myName = capitalizedName('JuSTin');
console.log(myName + ' how are you doing?');

let tipCalc = (cost, tipPercentage)=>{
    tip = cost * tipPercentage;
    tip = tip.toFixed(2);
    totalCost = cost + tip;
    
    return [totalCost, tip];
}

const finalCost = tipCalc(11, 0.2);
//console.log(finalCost[1]);
console.log(`The tip for your bill is $${finalCost[1]}. And the total bill is $${finalCost[0]}..`);


let count = 0;

for (;count<9;++count){
    console.log(count);
}

blah = function(){
    return lala;
    lala = 'hi';
};

console.log(blah());

function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4));

function foo(){
    return bar();
    function bar(){
        return "Poppin' bottles";
    }
}

console.log(foo());

function whatDoesItDo(val){
    return val ? 1:2;
}
let t = whatDoesItDo(false);
console.log(t);
