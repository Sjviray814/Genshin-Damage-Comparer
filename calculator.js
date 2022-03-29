//Ignore this:
function calculate2(high, low, cr){
    let sum = 0;
    let tries = 1000;
    
    for(let i = 0; i < tries; i++){
    if(Math.random() < cr) {
        sum += high;
    }
    else{
        sum += low;
    }
    }    
    return(sum/tries);
}

// Step 1:
// change the first number (34987) to your crit hit damage 
// change the second number (13276) to your non crit hit damage
// change the third number (.692) to your crit rate
function try1(){
	 // do it here:
    return calculate2(34987, 13276, .692);
}

// Step 2: switch your builds and do the same thing as step 1
function try2(){
	//do it here again:
    return calculate2(30349 ,12499, .758);
}
//ignore this:
let wins1 = 0;
let wins2 = 0;
for(let i = 0; i < 1000; i++){
    try1() > try2() ? wins1++ : wins2++;
}

// Step 3:
// Change the text inside the quotes below to indicate which set you used in step 1, make sure you keep the quotes and only change the text inside them
console.log("4pc Crimson Set:");
console.log(wins1);

// Step 4:
// Change the text inside these quotes to indicate which set you used in step 2
console.log("2pc gladiator, 2pc Crimson:");
console.log(wins2);