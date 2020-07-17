// feetToMile
function feetToMile(feet){
    let mile = feet/5280;
    return mile;
}
let convertedMile = feetToMile(1000);
console.log(convertedMile);

// woodCalculator
function woodCalculator(chair, table, bed){
    let chairCount = chair*1;
    let tableCount = table*3;
    let bedCount = bed*5;
    let totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
let woodResult = woodCalculator(10, 5, 2);
console.log(woodResult);

// tinyFriend
function tinyFriend(name){
    let smallName = name[0];
    for(let i=0; i<name.length; i++){
        let currentName = name[i];
        if(currentName.length < smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}
let smallFriend = tinyFriend(['asad', 'mokbul', 'jafar', 'opu']);
console.log(smallFriend);


// brickCalculator
function brickCalculator(floor){
    let bricks = 1000;
    let totalBricks;
    if((floor / 10)>0 && (floor/10)<=1){
        totalBricks = bricks*15*floor;
    }
    else if ((floor / 10)>1 && (floor/10)<=2){
        totalBricks = ((10*15)+(floor-10)*12)*bricks;
    }
    else {
        totalBricks = ((10*15)+(10*12)+(floor-20)*10)*bricks;
    }
    return totalBricks;
}
let brickAmount = brickCalculator(17);
console.log(brickAmount);