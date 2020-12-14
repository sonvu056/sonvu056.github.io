function changeColor() {
    document.getElementById("p1").style.color = "blue";
    document.getElementById("p2").style.color = "yellow";
    document.getElementById("p3").style.color = "red";
}

function changeBgColor(color) {
    document.getElementById("main").style.backgroundColor = color;
}

function copyContent(paragraph1, paragraph2) {
    document.getElementById(paragraph1).innerText = document.getElementById(
      paragraph2
    ).innerText;
}

function changeFontSize(x) {
    document.getElementById("main").style.fontSize = x + "px";
}

// function increaseFontSize(paragraph) {

// }