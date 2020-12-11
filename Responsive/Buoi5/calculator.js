temp = "";
flag = 0;
function addFlag(val) {
  flag = val;
}
function clr() {
  document.getElementById("line1").innerText = "";
  document.getElementById("line2").innerText = "0";
  temp = "";
}
function dis(val) {
  temp = document.getElementById("line1").innerText;
  if (
    temp[temp.length] != "×" ||
    temp[temp.length] != "÷" ||
    temp[temp.length] != "+" ||
    temp[temp.length] != "-"
  ) {
    document.getElementById("line1").innerText += val;
    temp = document.getElementById("line1").innerText;
  }
  document.getElementById("line2").innerText = "";
}
function solve() {
  temp = document.getElementById("line1").innerText;
  temp = temp.replaceAll("×", "*").replaceAll("÷", "/");
  document.getElementById("line2").innerText = eval(temp);
}
function minus() {
  temp = document.getElementById("line2").innerText;
  if (temp[0] == "-") {
    temp = temp.replace("-", "");
  } else {
    temp = "-" + temp;
  }
  document.getElementById("line2").innerText = temp;
}
function perc() {}
