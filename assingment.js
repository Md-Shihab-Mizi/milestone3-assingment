// feetToMile




function feetToMile(feet){
    var mile = feet * 0.00189394;
    return mile;
}

var result = feetToMile(3);
console.log(result);




// woodCalculator

function woodCalculator(chair, table,bed){
    var chairCount = 1 * chair;
    var tableCount = 3 * table;
    var bedCount = 5 * bed;
    var sum = chairCount + tableCount+ bedCount;
    return sum;
}
var result = woodCalculator( 3 , 2 , 5);
console.log(result);


// brickCalculator


// tinyFriend

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