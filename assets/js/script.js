const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const DIAS = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = zero(dateToday.getHours(), 2);
    let min = zero(dateToday.getMinutes(), 2);
    let seg = zero(dateToday.getSeconds(), 2);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    document.getElementById('data').innerHTML = zero(dateToday.getDate(), 2) + " - " + zero(dateToday.getMonth() + 1, 2) + " - " + dateToday.getFullYear() + " - " + DIAS[dateToday.getDay()]; 
})

function zero(num, digito) {
    return String(num).padStart(digito, "0");
}