const moeda = ["Cara", "Coroa"];
const result= document.querySelector('#result')
function caraCoroa(num){
    return Math.round(Math.random(num) * num);
}
//console.log(moeda[caraCoroa(1)]);
const h3 = document.createElement('h3')
h3.appendChild('h3');
result.innerHTML = moeda[caraCoroa(1)];