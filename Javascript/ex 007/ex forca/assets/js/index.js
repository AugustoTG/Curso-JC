const palavras = ['sagaz', 'negro', 'plena', 'poder', 'anexo', 'brado'];
const result = document.querySelector('h2');
const inf = document.querySelector('p')
function guessNumber(max){
    return Math.floor(Math.random() * max);
}
const palavra = palavras[guessNumber(6)];
console.log(palavra);

const verificador = () => {
    const input = document.querySelector('#texto');
    if(input.value === palavra){
        inf.innerText = 'Parabéns você acertou!'
        return result.innerText = palavra, inf.innerText ='Parabéns você acertou!';
    }else if(input.value !== palavra){
        if(input.value.length !== 1){
            alert('Insira apenas uma letra ou se você souber a resposta, escreva!')
        };
    };
    
};
