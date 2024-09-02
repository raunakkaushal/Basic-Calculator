function calculate() {
    // Getting user input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers.');
        return;
    }

    //calculation on selected operator
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Cannot divide by zero';
            break;
        case 'modulus':
            result = num1 % num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }

    // Displaying the result
    displayResult(result);
}

//function to display the result
function displayResult(message) {
    document.getElementById('result').innerText = `Result : ${message}`;
}
