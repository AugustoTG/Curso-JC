let counteiner = 0;

/*const increase = () => {
    counteiner++
    counteiner--
    console.log(counteiner)
}*/
function increase(){
    counteiner++
    console.log(counteiner)
    document.getElementById('counter').innerText = counteiner
}
function increase(){
    counteiner--
    console.log(counteiner)
    document.getElementById('counter').innerText = counteiner
}