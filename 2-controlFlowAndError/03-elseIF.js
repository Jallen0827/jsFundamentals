let age = 17;
for (age =17; age <26; age++){
    if(age <= 17){
        console.log('Sorry, you\'re too young to do anything');
    }else if(age>17 && age <21 ){
        console.log('Yay! You can vote!');
    }else if (age >=21 && age < 25){
        console.log('Yay! You can drink!');
    }else{
        console.log('Yay! You can rent a car');
    }
}