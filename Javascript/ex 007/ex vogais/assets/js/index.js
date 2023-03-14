const result = document.querySelector('p')
console.log(result)
const verificador = () => {
    const input = document.querySelector('#texto');
    if(input?.value?.length !== 1){
        console.log(input.length)
        return alert('Insira apenas uma vogal ou consoante')
    }
    const vogaisMin = ['a', 'e', 'i', 'o', 'u'];
    const vogais = vogaisMin.toLowerCase();
    for(let vogal of vogais){
        if(input.value === vogal){
            return result.innerHTML = `${input.value} é uma vogal!`;
        }else{
            return result.innerHTML = `${input.value} Não é uma vogal!`;
        };
    };
};

   