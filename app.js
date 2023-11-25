function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result;

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
            result = (num2 !== 0) ? num1 / num2 : 'Cannot divide by zero!';
            break;
        case 'modulus':
            result = num1 % num2;
            break;
        case 'power':
            result = num1 ** num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}