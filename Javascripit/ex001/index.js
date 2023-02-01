let counteiner = 0;

const increase = () => {
    counteiner++
    console.log(counteiner)
    document.getElementById('counter').innerText = counteiner
}
const decrease = () => {
    counteiner--
    console.log(counteiner)
    document.getElementById('counter').innerText = counteiner
}
