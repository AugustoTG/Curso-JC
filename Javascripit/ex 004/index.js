
function getNumber(){
    let num = document.querySelector('#inputNumber').value;
    num = Number(num)
    return num;
}

function number(){
    const guessNumber = Math.round(Math.random()* (100-0) +0);
    return guessNumber;
}
