function clr() {
  document.getElementById("line1").innerText = "";
  document.getElementById("line2").innerText = "0";
}

function dis(val) {
  document.getElementById("line1").innerText += val;
  document.getElementById("line2").innerText = "";
}

function sovle() {
  temp = document.getElementById("line1");
  if (document.getElementById("line1" != "")) {
  }
  document.getElementById("line2").innerText = eval(
    document.getElementById("line1").innerText
  );
}
