const likeMessage = document.querySelector("#likeMessage");
const likeButton = document.querySelector("#likeButton");
let countUp;

likeButton.addEventListener("click", function(){
    clearInterval(countUp);
    let timer = 0;
    likeMessage.style.display = "block";

    countUp = setInterval(function(){
        if(timer >= 3){
            likeMessage.style.display = "none";
            timer = 0;
            clearInterval(countUp);
        }
        timer++;
    }, 1000);
});