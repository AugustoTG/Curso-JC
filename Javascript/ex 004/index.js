    let resut = document.querySelector('#result');
    let clue = document.querySelector('#clue');
function getNumber(){
    let num = document.querySelector('#inputNumber');
    num = Number(num.value)
    return num;

}

function guessNumber(max){
    return Math.round(Math.random() * max);
}


