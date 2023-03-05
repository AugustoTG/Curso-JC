const data = new Date();
const resultado = document.querySelector('.container h1');
resultado.innerText = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});