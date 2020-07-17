// feetToMile start


function feetToMile(feet){
    var mile = feet * 0.00189394;
    return mile;
}

var result = feetToMile(3);
console.log(result);

// feetToMile start




// woodCalculator start

function woodCalculator(chair, table,bed){
    var chairCount = 1 * chair;
    var tableCount = 3 * table;
    var bedCount = 5 * bed;
    var sum = chairCount + tableCount+ bedCount;
    return sum;
}
var result = woodCalculator( 3 , 2 , 5);
console.log(result);

// woodCalculator end


// brickCalculator start

function brickCalculator(floor){
    var totalHeight;
    var totalBrick;
    if(floor<=10){
        totalHeight = floor * 15;
        totalBrick = totalHeight * 1000;
    }   
    else if (floor <=20 ){
        totalHeight = (10 * 15) + (10 *12);
        totalBrick = totalHeight * 1000;
    }
    else{
       if ( floor >= 21){
        totalHeight = (10 *15)+(10 * 12)+(floor * 10);
        totalBrick = totalHeight * 1000 - (200000);

       }
        
    }
    return totalBrick;
}
var result = brickCalculator(21);
console.log(result);

// brickCalculator end



// tinyFriend start

function  tinyFriend(n){
    var tiny = n[0];
    for (var i = 0; i < n.length; i++){
        var element = n[i];
        if (element < tiny){
            tiny = element;
        }
    }
    return tiny;
   
}
var result = tinyFriend(["shihab", "shibu" , "simul" , "sukkur"]);
console.log(result);

// tinyFriend end





