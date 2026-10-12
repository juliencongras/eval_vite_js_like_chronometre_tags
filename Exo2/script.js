const stopwatch = document.querySelector("#stopwatch");
const stopButton = document.querySelector("#stopButton");
let countUp;

let stopped = true;

let timer = 0;

stopButton.addEventListener("click", function(){
    clearInterval(countUp);
    stopped = !stopped;
    if(stopped){
        stopButton.innerText = "Reprendre";
    }
    else{
        countUp = setInterval(function(){
            timer++;
            stopwatch.innerText = (timer - timer%100) / 100;
        }, 10);
        stopButton.innerText = "Pause";
    }
});