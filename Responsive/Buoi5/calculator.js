temp = "";
function clr() {
  document.getElementById("line1").innerText = "";
  document.getElementById("line2").innerText = "0";
  temp = "";
}

function dis(val) {
  document.getElementById("line1").innerText += val;
  document.getElementById("line2").innerText = "";
}

function sovle() {
  document.getElementById("line2").innerText = eval(
    document.getElementById("line1").innerText
  );
}
