const palavras = ['sagaz', 'negro', 'plena', 'poder', 'anexo', 'brado'];
const result = document.querySelector('p')
console.log(result)
const verificador = () => {
    const input = document.querySelector('#texto');
    if(input.value.length !== 1){
        console.log(input.length)
        return alert('Insira apenas uma vogal ou consoante')
    }
    if(input.value === 'a' || input.value === 'e' || input.value === 'i' || input.value === 'o' || input.value === 'u' || input.value === 'A' || input.value === 'E' || input.value === 'I' || input.value === 'O' || input.value === 'U'){
        return result.innerHTML = `${input.value} é uma vogal!`
    }else{
        return result.innerHTML = `${input.value} Não é uma vogal!`
    }
};
