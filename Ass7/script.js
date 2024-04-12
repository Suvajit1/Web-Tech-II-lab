function showTextBox() {
  var payLaterRadio = document.getElementById('payLater');
  var textBox = document.getElementById('paymentDate');

  if (payLaterRadio.checked) {
      textBox.style.display = 'block';
  } else {
      textBox.style.display = 'none';
  }
}
