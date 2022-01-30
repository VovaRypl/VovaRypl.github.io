function changeClass(event){
    event.target.parentNode.children[1].classList.toggle("visible");
}

window.onload = () => {
    let balls = 0;
    let lives = 10;

    const area = document.querySelector(".area");
    const basket = document.querySelector(".basket");
    const areaPos = {
        x: area.getBoundingClientRect().x,
        y: area.getBoundingClientRect().y
    }
    let coord = 0;

    function basketMove(){
        area.onmousemove = (event) => {
            coord = (event.clientX - areaPos.x - 50);
            if(coord < 0){
                coord = 0;
            } else if(coord > 500){
                coord = 500;
            }
            basket.style.left = coord + "px";
        }
    }

    function generateBall(){
        const ball = document.createElement("div");
        ball.classList.add("ball");
        let randomPos = Math.random() * 550;
        ball.style.left = randomPos + "px";
        ball.style.top = 0;
        area.prepend(ball);

        let fall = setInterval(() => {
            let top = Number(ball.style.top.slice(0, ball.style.top.length-2));
            if(top >= 300){
                if(randomPos >= coord && randomPos <= coord+50){
                    area.style.background = "#6FFF76";
                    balls++;
                } else {
                    area.style.background = "#FF6F6F";
                    lives--;
                }
                clearInterval(fall);
                setTimeout(() => {
                    area.style.background = "#fff";
                }, 150);
                ball.remove();
                document.querySelector("#lives").innerText = lives;
                document.querySelector("#balls").innerText = balls;
                
                if(lives > 0){
                    generateBall();
                } else {
                    let notice = document.createElement("div");
                    notice.classList.add("notice");
                    let text = document.createElement("div");
                    text.innerText = "Game Over";
                    notice.append(text);
                    area.append(notice);
                }
            }
            ball.style.top = (top + 1) + "px";
        }, 1);
    }

    generateBall();

    basketMove();

}