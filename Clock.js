let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours()
    let am_pm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours :12;

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()
    am_pm.innerHTML = am_pm
}, 1000);