//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


//woodCalculator
function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

//brickCalculator

function brickCalculator(brick){
    if (floore<=10){
        var brick = floore*15*1000;
    }
    
    return brick;
    
}
var result = brickCalculator(35);
console.log(result);




//tinyFriend
function tinyFriend(name){
    var smallName = name[0].length;
    for (var i = 0; i < name.length; i++){
        var currentName = name[i].length;
        if(currentName < smallName){
            smallName = currentName;
        }
        
    }
    return smallName;
}
