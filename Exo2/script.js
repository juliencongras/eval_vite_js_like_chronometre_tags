const stopwatch = document.querySelector("#stopwatch");
const stopButton = document.querySelector("#stopButton");

let stopped = true;

let timer = 0;

stopButton.addEventListener("click", function(){
    stopped = !stopped;
    if(stopped){
        stopButton.innerText = "Reprendre";
    }
    else{
        stopButton.innerText = "Pause";
    }

    const countUp = setInterval(function(){
        timer++;
        stopwatch.innerText = timer;
    }, 1000);
});