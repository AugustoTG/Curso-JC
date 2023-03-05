const moeda = ["Cara", "Coroa"];
const result= document.querySelector('#result')
function caraCoroa(num){
    return Math.round(Math.random(num) * num);
}
function resultado(){
    const h3 = document.createElement('h3')
    result.appendChild(h3);
    result.innerHTML = moeda[caraCoroa(1)];
}

const intervalo = setInterval(function(){
    
    const int = document.createElement('h3')
    result.appendChild(int);
    result.innerHTML = "..."
},500)


