/*const data = new Date();

function zoroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function dataTexto(data){
    const dia_Da__Semana = semanaTexto(data.getDay());
    const dia = zoroEsquerda(data.getDate());
    const mes = mesTexto(data.getMonth());
    const ano = zoroEsquerda(data.getFullYear());
    const hora = zoroEsquerda(data.getHours());
    const min = zoroEsquerda(data.getMinutes());
    const seg = zoroEsquerda(data.getSeconds());
    return `${dia_Da__Semana}, ${dia} de ${mes} de ${ano} - ${hora}:${min}:${seg}`;
}
function semanaTexto(dia_Da__Semana){
    switch (dia_Da__Semana){
        case 0 :
            return dia_Da__Semana = 'Domingo';
        case 1:
            return dia_Da__Semana = 'Segunda-feira';
        case 2:
            return dia_Da__Semana = 'Terça-feira';
        case 3:
            return dia_Da__Semana = 'Quarta-feira';
        case 4:
            return dia_Da__Semana = 'Quinta-feira';
        case 5:
            return dia_Da__Semana = 'Sexta-feira';
        case 6:
            return dia_Da__Semana = 'Sabado-feira';
    }
}
function mesTexto(mes){
    switch (mes){
        case 0 :
            return mes = 'Janeiro';
        case 1:
            return mes = 'Fevereiro';
        case 2:
            return mes = 'Março';
        case 3:
            return mes = 'Abril';
        case 4:
            return mes = 'Maio';
        case 5:
            return mes = 'Junho';
        case 6:
            return mes = 'Julho';
        case 7:
            return mes = 'Agosto';
        case 8:
            return mes = 'Setembro';
        case 9:
            return mes = 'Outubro';
        case 10:
            return mes = 'Novembro';
        case 11:
            return mes = 'Dezembro';
    }
}
const formataData = dataTexto(data);

const resultado = document.querySelector('.container h1');
resultado.innerText = formataData; */

const data = new Date();
const resultado = document.querySelector('.container h1');
resultado.innerText = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

