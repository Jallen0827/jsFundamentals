function arrFunct(arr1,arr2){
    for (let r of arr1){
        if (arr1.indexOf(r)>=0){
            console.log(`${(arr1.indexOf(r)+1)}${arr2[3]} is ${r}`);
        }else{
            console.log(`${(arr1.indexOf(r)+1)}${arr2[1]} is ${r}`);
        };
    }
}

let arrFunct2=(colorArray, arr2)=>{
    for (let i=0; i<colorArray.length; i++){
        if (i >= 3){
            console.log(`${i+1}${arr2[3]} is ${colorArray[i]}`);
        } else {
            console.log(`${i+1}${arr2[0]} is ${colorArray[i]}`);
        };
}
}
let colors = ['blue', 'orange', 'green', 'black', 'grey'];
let suffixes = ['st', 'nd', 'rd', 'th'];
arrFunct(colors, suffixes);
arrFunct2(colors, suffixes);