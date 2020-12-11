temp = "";
function clr() {
  document.getElementById("line1").innerText = "";
  document.getElementById("line2").innerText = "0";
  temp = "";
}
function dis(val) {
  document.getElementById("line1").innerText += val;
  temp = document.getElementById("line1").innerText;
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
