    let resut = document.querySelector('#result');
    let clue = document.querySelector('#clue');
function getNumber(){
    let num = document.querySelector('#inputNumber');
    num = Number(num.value)
    return num;
}

function number(){
    const guessNumber = Math.round(Math.random()* (100-0) +0);
    return guessNumber;
}
console.log(number());
let i = getNumber()
while(i !== number()){
    if(getNumber() < number()){
        console.log("O numero é maior ")
    }else if(getNumber() > number()){
        console.log("O numero é menor ")
    }else{
        console.log("vc acertou! ")
    }
    i++
}
/*if(getNumber() < number()){
    console.log("O numero é maior ")
}else if(getNumber() > number()){
    console.log("O numero é menor ")
}else{
    console.log("vc acertou! ")
}*/