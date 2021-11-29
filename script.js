function bmi() {
  let weight = parseFloat(document.getElementById("weight").value); // To get weight from the input with id as weight
  let height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
  let bmi = weight / (height * height); // According to the formula
  document.getElementById("answer").value =
    String(bmi.toPrecision(3)) + " kg/m^2"; // writing to the output

  if (bmi < 18.5) {
    document.getElementById("category").value = "Underweight";
  } else if (bmi >= 18.5 && b <= 25) {
    document.getElementById("category").value = "Healthy weight";
  } else if (bmi > 25 && b <= 30) {
    document.getElementById("category").value = "Overweight";
  } else if (bmi > 30 && b <= 35) {
    document.getElementById("category").value = "Obese Class 1";
  } else if (bmi > 35 && b <= 40) {
    document.getElementById("category").value = "Obese Class 2";
  } else {
    document.getElementById("category").value = "Obese Class 3";
  }
}
