function convertTemperature() {
  var degreesInput = document.getElementById("degrees");
  var resultElement = document.getElementById("result");

  if (degreesInput.value !== "") {
    var degrees = parseFloat(degreesInput.value);
    var unit = document.getElementById("unit").value;

    if (unit === "celsius") {
      var fahrenheit = (degrees * 9 / 5) + 32;
      resultElement.textContent = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + "°F";
    } else if (unit === "fahrenheit") {
      var celsius = (degrees - 32) * (5 / 9);
      resultElement.textContent = "Temperature in Celsius: " + celsius.toFixed(2) + "°C";
    }
  }
}

function clearFields() {
  var degreesInput = document.getElementById("degrees");
  var resultElement = document.getElementById("result");

  degreesInput.value = "";
  resultElement.textContent = "";
}
