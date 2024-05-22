function handleSubmit() {
    var radioButtons = document.querySelectorAll('input[name="quiz1"]');
    var selectedValue = null;
  
    radioButtons.forEach(function(radio) {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });
  
    if (selectedValue) {
      if (selectedValue === 'knop1') {
        alert("goed");
      } else {
        alert("fout");
      }
  }
}
  
  document.getElementById('submitButton').addEventListener('click', handleSubmit);