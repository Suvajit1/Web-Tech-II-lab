funcription showTextbox() {
  var container = document.getElementById("textbox-container");
  var textbox = document.getElementById("textbox");
  if (document.querySelector('input[name="option"]:checked').value === "payLater") {
    container.style.display = "block";
    textbox.required = true;
  } else {
    container.style.display = "none";
    textbox.required = false
  }
}