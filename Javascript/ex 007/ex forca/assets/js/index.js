const palavras = ['sagaz', 'negro', 'plena', 'poder', 'anexo', 'brado'];
let erro = 5;
const result = [document.querySelector('.letras1'), document.querySelector('.letras2'),document.querySelector('.letras3'),document.querySelector('.letras4'),document.querySelector('.letras5')];
const tentativas = document.querySelector('h5')
const inf = document.querySelector('p')
function guessNumber(max){
    return Math.floor(Math.random() * max);
}
const palavra = palavras[guessNumber(6)];
const verificador = () => {
    const input = document.querySelector('#texto');
    if(erro === 0){
        tentativas.innerText = `Você perdeu!`
    }
    for(let letras of palavra){
        if(letras === input.value && letras === palavra[0]){
            return result[0].innerText = letras;
        }else if(letras === input.value && letras === palavra[1]){
            return result[1].innerText = letras;
        }else if(letras === input.value && letras === palavra[2]){
            return result[2].innerText = letras;
        }else if(letras === input.value && letras === palavra[3]){
            return result[3].innerText = letras;
        }else if(letras === input.value && letras === palavra[4]){
            return result[4].innerText = letras;
        };
    };
    if(input.value === palavra){
        inf.innerText = 'Parabéns você acertou!'
        result[1].innerText = ''
        result[2].innerText = ''
        result[3].innerText = ''
        result[4].innerText = ''
        return result[0].innerText = palavra
    }else if(input.value !== palavra){
        if(input.value.length !== 1){
            alert('Insira apenas uma letra ou se você souber a resposta, escreva!')
        }else if(input.value !== palavra){
            erro --;
            tentativas.innerText = `Você errou ainda restam ${erro} tentativas.`
        };
    };

};
