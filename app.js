function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('result').innerHTML = `Your BMI is ${bmi}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid inputs';
    }
}