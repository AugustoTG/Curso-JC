    let resut = document.querySelector('#result');
    let clue = document.querySelector('#clue');
function getNumber(){
    let num = document.querySelector('#inputNumber');
    num = Number(num.value)
    return num;

}

function number(max){
    const guessNumber = Math.round(Math.random()* max);
    return guessNumber;
}
console.log(number(100));
let i = getNumber()
while(i !== number()){
    if(getNumber() < number()){
        console.log("O numero é maior ")
    }else if(getNumber() > number()){
        console.log("O numero é menor ")
    }
    continue
    i = i;
}
/*if(getNumber() < number()){
    console.log("O numero é maior ")
}else if(getNumber() > number()){
    console.log("O numero é menor ")
}else{
    console.log("vc acertou! ")
}*/