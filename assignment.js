// Feet to Mile convert:
function feetToMile(feet){
    if(feet<0){
        return "Value can not be negative please insert the correct value"
    }
    var result = feet/5280;
    return result.toFixed(5);
}
console.log(feetToMile(-500088));


// Wood Calculator:
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return "Value can not be negative please insert the correct value"
    }
    chair = chair * 1;
    table = table * 3;
    bed = bed * 5;
    return total = (chair + table + bed);
}
console.log(woodCalculator(1,2,3));



// Brick Calculator:
function brickCalculator(floor){
    var result;
    var remainFloor; 
    if(floor<0){
        return "Value can not be negative please insert the correct value"
    }
    else if(0<floor && floor<11){
        return result = floor * 15000;
    }
    else if(21>floor && floor>10){
        remainFloor = floor - 10;
        return result = (remainFloor * 12000) + 150000;
    }
    else if(20<floor){
        remainFloor = floor - 20;
        return result = (remainFloor * 10000) + 120000 + 150000;
    }
}
console.log(brickCalculator(10));


//Array Calculation :
function tinyFriend(friendName){
    result = friendName[0];
    for(i = 0; i<friendName.length; i++){
        if( friendName[i].length < result.length ){
            result = friendName[i];
        }
    }
    return friendName.values();
}
console.log(tinyFriend(["an",'a','dr']))