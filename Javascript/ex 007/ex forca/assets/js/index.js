const palavras = ['sagaz', 'negro', 'plena', 'poder', 'anexo', 'brado'];
function guessNumber(max){
    return Math.floor(Math.random() * max);
}
console.log(palavras[guessNumber(6)]);
const result = document.querySelector('h2')
const verificador = () => {
    const input = document.querySelector('#texto');
   
};
