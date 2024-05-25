let num = 0;

let increase = document.getElementById("in");
let decrease = document.getElementById("dec");
let reset = document.getElementById("res");
let display = document.getElementById("display");

increase.onclick = function(){
    num++;
    display.textContent = num;
}

reset.onclick = function(){
    num = 0;
    display.textContent = num;
}

decrease.onclick = function(){
    num--;
    display.textContent = num;
}