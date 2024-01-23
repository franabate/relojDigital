function date (){
    let currentTime= new Date ();
    let hour= currentTime.getHours();
    let minutes= currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hour= (hour<10) ? "0" + hour:hour;
    minutes= (minutes<10) ? "0" + minutes:minutes;
    seconds= (seconds<10) ? "0" + seconds:seconds;

    string= hour + ":" + minutes + ":" + seconds;
    document.getElementById("reloj").innerText= string;

}

setInterval(date, 1000);