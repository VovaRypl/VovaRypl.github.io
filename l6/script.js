function changeClass(event){
    event.target.parentNode.children[1].classList.toggle("visible");
}

window.onload = () => {
    document.querySelector("#animate").onclick = () => {
        document.querySelector("#block").style.animation = "animate2 2s linear, animate3 2s linear 2s, animate4 2s linear 4s, animate5 2s linear 6s, animate6 2s linear 8s";
        setTimeout(() => {
            document.querySelector("#block").style.animation = "";
        },10000);
    };
}