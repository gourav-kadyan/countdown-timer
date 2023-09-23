const daysel = document.getElementById("days");
const hourssel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secsel = document.getElementById("sec");

const newyear = "1 Jan 2024";

function countdown(){
    const date = new Date(newyear);
    const currentdate = new Date();
    var data = Math.abs(date - currentdate);
    const days = Math.floor(data / (1000 * 60 * 60 * 24));
    data =  Math.floor(data - (days * 24 * 60 * 60 * 1000));
    const hours = Math.floor(data / (1000 * 60 * 60));
    data = Math.floor(data - (hours * 60 * 60 * 1000));
    const mins = Math.floor(data / (1000 * 60 ));
    data = Math.floor(data - (mins * 1000 * 60));
    const secs = Math.floor(data / (1000));

    daysel.innerHTML = days;
    hourssel.innerHTML = hours;
    minsel.innerHTML = mins;
    secsel.innerHTML = secs;
}

//intial call
countdown();

setInterval(countdown,1000);
