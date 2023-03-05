const moeda = ["Cara", "Coroa"];
const result= document.querySelector('#result')
let rodando = false;
function caraCoroa(num){
    return Math.round(Math.random(num) * num);
}
function resultado(){
    const h3 = document.createElement('h3')
    result.appendChild(h3);
    result.innerHTML = "..."


const gerarMoeda = () =>{

 setTimeout(function(){
    rodando = true;
    result.innerHTML = moeda[caraCoroa(1)];
    rodando = false;
},500);
};
if(rodando === false){
    rodando = true;
    gerarMoeda();
}

clearTimeout(gerarMoeda);
}
