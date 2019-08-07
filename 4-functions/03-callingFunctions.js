//Calling Functions

function hi(){
    console.log('Hi');
 
}

console.log(hi());

hi(); //call or 'invoke' our function. AKA Start button on machine

function numbers(){
    let sum = 0;
    for(let i = 1; i<11;i++){
        sum += i;
    }
    console.log(sum);
}

numbers();

function array(){
    let arr = ['this', 'is', 'really', 'cool'];
    for (let array of arr){
        console.log(array);
    }
}

function array(){
    let arr = ['this', 'is', 'really', 'cool'];
    for(let array in arr){
        console.log(arr[array]);
    }
}
array()
