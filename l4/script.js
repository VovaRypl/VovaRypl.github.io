function changeClass(event){
    event.target.parentNode.children[1].classList.toggle("visible");
}

window.onload = () => {
    let fields = document.querySelectorAll(".reg");

    for(let i=0; i<fields.length; i++){
        if(fields[i].className == "reg empty"){
            fields[i].onclick = () => {
                fields[i].classList.toggle("empty");
            }
        }
    }


    document.querySelector("#clear").onclick = () => {
        let fields = document.querySelectorAll(".reg");
        for(let i=0; i<fields.length; i++){
            fields[i].value = "";
        }
    }
}



card_info = ["4158758846559045", "2022-12-02", "851"];

attempts = 4;

function check_fields(){
    let fields = document.querySelectorAll(".reg");

    for(let i=0; i<fields.length; i++){
        if(fields[i].value == ""){
            fields[i].classList.add("empty");
        }
        if(fields[i].id == "num" && (fields[i].value.length != 12
            || parseInt(fields[i].value.substr(0, 3)) != 380))
        {
            fields[i].classList.add("empty");
        }
        if(fields[i].id == "email" && (fields[i].value.search("@") == -1
        || fields[i].value.search(".") == -1)){
            fields[i].classList.add("empty");
        }
    }

    const card_data = document.querySelectorAll(".card");
    let flag = 0;
    card_data.forEach((item, i) => {
        if(i==1){
            if(item.value != card_info[i]){
                flag = 1;
            }
        } else {
            if(item.value != card_info[i]){
                flag = 1;
            }
        }
    });

    if(flag == 1){
        document.querySelector(".attemps").style.display = "inline-block";
        attempts--;
        document.querySelector(".attemps").innerText = "Осталось " + attempts + " попыток";
        if(attempts == 0){
            document.querySelector("#send").style.display = "none";
        }
    } else {
        document.querySelector(".attemps").style.display = "none";
    }

    let empties = document.querySelectorAll(".empty");

    if(empties.length){
        document.querySelector(".response").innerText = "Проверьте правильность заполнения полей";
    } else {
        document.querySelector(".response").innerText = "Регистрация успешна!";
    }

    for(let i=0; i<empties.length; i++){
        empties[i].onchange = () => {
            empties[i].classList.remove("empty");
        }
    }

}

function perform(){
    let strings = document.querySelector("#task2").value.split(" ");
    document.querySelector(".searched").innerHTML = "";
    strings[0] = "!";
    let result = "";
    strings.forEach(item => {
        result += item + " ";
    });
    document.querySelector("#task2").value = result;
}