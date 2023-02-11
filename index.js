const data = new Date(new Date().getTime() + 1000000000)
let agora = new Date()
const relogio = document.getElementById("relogio")


function countdown() {

    const currentDate = new Date();

    const totalSeconds = (data - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    relogio.innerHTML = days + "&nbsp:&nbsp" + formatTime(hours) + "&nbsp:&nbsp" + formatTime(mins) + "&nbsp:&nbsp" + formatTime(seconds)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);