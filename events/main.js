//When page loads, Select steps two through four and then add the class "hide" to them.
window.onload = function hide() {
    var list = document.querySelectorAll("li");
    for (let i = 1; i < list.length; i++) {
        list[i].classList.add("hide");
    }
}

//When button is pressed it removes the hide class one at a time.
if(! count) {
    var count = 0;
}
function nextStep() {
    let list = document.querySelectorAll("li");
    let firework = document.querySelector("img");
    count++;
    if (count == 1) {
        list[1].classList.remove("hide");
    }
    if (count == 2) {
        list[2].classList.remove("hide");
    }
    if (count == 3) {
        list[3].classList.remove("hide");
        firework.classList.remove("hide");
        document.getElementById('img').className ='animation';
    }
}
//when touched, change background color
window.ontouchstart = function backColor() {
    let background = document.querySelector("body");
    background.classList.add("bcolor");
}
//When button is pressed on phone, change color, go back when lifted off
function mobileButtons(){
    var btn = document.querySelector('button');

    btn.ontouchstart = function btnPress() {
        let btn = document.querySelector('button');
        btn.classList.add("btncolor");
    }
    btn.ontouchend = function btnLift() {
        let btn = document.querySelector('button');
        btn.classList.remove("btncolor");
    }
}
