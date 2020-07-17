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

function brickCalculator(floore){
    if (floore<=10){
        var fristpart = floore*15*1000;
        var brick = fristpart;
    }
    else if (floore<=20){
        var secondPart = floore*12*1000;
        var brick = fristpart + secondPart;
    }
    else if (floore > 20){
        var thirdPart = floore*10*1000;
        var brick = thirdPart + secondPart + fristpart;
    }
    return brick;
    
}


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
