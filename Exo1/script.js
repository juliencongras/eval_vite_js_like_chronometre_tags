const likeMessage = document.querySelector("#likeMessage");
const likeButton = document.querySelector("#likeButton");

likeButton.addEventListener("click", function(){
    let timer = 0;
    likeMessage.style.display = "block";

    const countUp = setInterval(function(){
        if(timer > 3){
            likeMessage.style.display = "none";
            clearInterval(countUp);
        }
        timer++;
    }, 1000);
});