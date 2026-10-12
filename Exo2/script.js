const stopwatch = document.querySelector("#stopwatch");
const stopButton = document.querySelector("#stopButton");

let timer = 0;

stopButton.addEventListener("click", function(){
    const countUp = setInterval(function(){
        stopwatch.innerText = timer
        timer++;
    }, 1000);
});