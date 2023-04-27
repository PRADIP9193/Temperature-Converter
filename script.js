// declare a variable
let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let inputTypeValue, resultTypeValue;
let convBtn = document.getElementById("convert");

// add a eventlisteners
convBtn.addEventListener("click", changeTemperature);
inputTypeValue.addEventListener("change", changeTemperature);
resultTypeValue.addEventListener("change", changeTemperature);

function changeTemperature() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  //Degree Celsius
  if (inputTypeValue === "Degree Celsius" && resultTypeValue === "Fahrenheit") {
    result.value = Number((input.value * 9) / 5) + 32;
    // console.log(result.value); 
  } else if (
    inputTypeValue === "Degree Celsius" &&
    resultTypeValue === "Kelvin"
  ) {
    // console.log(input.value);
    result.value = Number(input.value) + 273.15;

  } else if (
    inputTypeValue === "Degree Celsius" &&
    resultTypeValue === "Degree Celsius"
  ) {
    result.value = input.value;
  }
  // Fahrenheit
  if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Degree Celsius") {
    result.value = (Number(input.value - 32) * 5) / 9;
  } else if (inputTypeValue === "Fahrenheit" && resultTypeValue === "Kelvin") {
    result.value = (Number(input.value - 32) * 5) / 9 + 273.15;
  } else if (
    inputTypeValue === "Fahrenheit" &&
    resultTypeValue === "Fahrenheit"
  ) {
    result.value = input.value;
  }
  // kelvin
  if (inputTypeValue === "Kelvin" && resultTypeValue === "Degree Celsius") {
    result.value = Number(input.value) - 273.15;
  } else if (inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit") {
    result.value = ((Number(input.value) - 273.15) * 9) / 5 + 32;
  } else if (inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
    result.value = input.value;
  }
}
