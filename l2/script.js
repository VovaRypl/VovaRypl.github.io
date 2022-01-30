function changeClass(event){
    event.target.parentNode.children[1].classList.toggle("visible");
}

function replace(){
    let img = document.querySelector("#img");
    // img.style.position = "relative";
    let left = img.style.left;
    console.log(left, left.slice(0, left.length - 2))
    img.style.left = Number(left.slice(0, left.length - 2)) + 1 + "px";
}

window.onload = () => {
    let img = document.querySelector("#img");
    img.style.left = "0px";
}