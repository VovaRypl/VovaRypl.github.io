function changeClass(event){
    event.target.parentNode.children[1].classList.toggle("visible");
}

$(document).ready(() => {
    $("#res1").mouseover(() => {
        $("#res1").css("font-style", "italic", "text-align", "center");
        $("#res1").css("text-align", "center");
    });
    $("#res1").mouseout(() => {
        $("#res1").css("font-style", "normal");
        $("#res1").css("text-align", "left");
    });

    $("#animate").click(() => {
        $("#block").animate({
            bottom: "0px",
            left: "0px",
            width: "50px",
            height: "50px"
        });
        $("#block").animate({
            left: "125px",
            bottom: "125px"
        });
        $("#block").animate({
            width: "25px",
            height: "25px"
        });
        $("#block").animate({
            left: "0px"
        });
    });

    $("#inp2").change(() => {
        if($("#inp2").prop("checked")){
            $("#inp3").css("display", "none");
        } else {
            $("#inp3").css("display", "inline-block");
        }
    });
})

