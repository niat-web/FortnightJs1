// DOM References
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultElement = document.getElementById('result');
const calculationSteps = document.getElementById('calculation-steps');

// Operation Buttons
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');

// Event Listeners
num1Input.addEventListener('input', validateInput);
num2Input.addEventListener('input', validateInput);

addButton.addEventListener('click', () => performOperation('add'));
subtractButton.addEventListener('click', () => performOperation('subtract'));
multiplyButton.addEventListener('click', () => performOperation('multiply'));

// Functions
function validateInput(event) {
    // Get the input element
    const input = event.target;

    // Check if the input is a number
    if (input.value !== '' && isNaN(Number(input.value))) {
        // If not a number, show visual feedback
        input.style.borderColor = 'red';
        input.style.backgroundColor = '#fff0f0';
    } else {
        // Reset styles if valid
        input.style.borderColor = '#ddd';
        input.style.backgroundColor = 'white';
    }
}

function performOperation(operation) {
    // Get input values
    let num1 = num1Input.value !== '' ? Number(num1Input.value) : 0;
    let num2 = num2Input.value !== '' ? Number(num2Input.value) : 0;
    let result;
    let steps = '';

    // Validate inputs for NaN
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Error: Invalid input';
        calculationSteps.textContent = 'Please enter valid numbers';
        return;
    }

    // Perform the selected operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            steps = `${num1} + ${num2} = ${result}`;
            break;
        case 'subtract':
            result = num1 - num2;
            steps = `${num1} - ${num2} = ${result}`;
            break;
        case 'multiply':
            result = num1 * num2;
            steps = `${num1} × ${num2} = ${result}`;
            break;
        default:
            resultElement.textContent = 'Error';
            calculationSteps.textContent = 'Invalid operation';
            return;
    }

    // Update the result display
    resultElement.textContent = result;
    calculationSteps.textContent = steps;

    // Visual feedback for result
    resultElement.style.color = '#4c84ff';
    setTimeout(() => {
        resultElement.style.color = '#4c84ff';
    }, 300);
}
