function calculate() {
    // Retrieve input values
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInput = parseFloat(document.getElementById("height").value);

    // Validate input values
    if (isNaN(weight) || isNaN(heightInput) || weight <= 0 || heightInput <= 0) {
        document.getElementById("results").innerHTML = "Please enter valid positive values for weight and height.";
        return;
    }

    // Calculate BMI
    const heightInMeters = heightInput / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Determine BMI category
    let measure;
    if (bmi <= 18.4) {
        measure = `Your BMI is ${bmi} which means you are Underweight.`;
    } else if (bmi <= 24.9) {
        measure = `Your BMI is ${bmi} which means you are Normal.`;
    } else if (bmi <= 29.9) {
        measure = `Your BMI is ${bmi} which means you are Overweight.`;
    } else {
        measure = `Your BMI is ${bmi} which means you are Obese.`;
    }

    // Display the result
    document.getElementById("results").innerHTML = measure;
}
