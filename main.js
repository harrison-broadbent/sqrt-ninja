import "./style/style.scss";

// Inputs
let slider = document.getElementById("precisionRange");
let numberInput = document.getElementById("numberInput");

// Outputs
let precisionOutput = document.getElementById("precisionOutput");
let sqrtOutput = document.getElementById("sqrtOutput");

// Initializations
numberInput.value = 67;
slider.value = 40;
Big.DP = Number(slider.value);
precisionOutput.innerHTML = generatePrecisionString(slider.value); // Display the default slider value
outputResult();

// Runtime
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  precisionOutput.innerHTML = generatePrecisionString(this.value);
  Big.DP = Number(this.value);
  outputResult();
};

numberInput.oninput = function () {
  outputResult();
};

// Helper Functions
function outputResult() {
  let userValue = numberInput.value;
  let result = new Big(userValue).sqrt().toString();
  sqrtOutput.innerHTML = result;
}

function generatePrecisionString(value) {
  return "Precision: " + (value || "");
}
