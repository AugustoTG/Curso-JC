const moeda = ["Cara", "Coroa"];
const result= document.querySelector('#result')
function caraCoroa(num){
    return Math.round(Math.random(num) * num);
}
function resultado(){
    const h3 = document.createElement('h3')
    result.appendChild(h3);
    return result.innerHTML = moeda[caraCoroa(1)];
}


