function guessNumber(max){
    return Math.floor(Math.random() * max);
}
console.log(guessNumber(101));

let resut = document.querySelector('#result');
let clue = document.querySelector('#clue');

function getNumber(){  
    let num = document.querySelector('#inputNumber');
    num = Number(num.value)
    console.log(num)
}
console.log(getNumber());
if(guessNumber(101 === getNumber)){
    console.log('vc acertou')
}else{
    console.log('vc errou')
}

