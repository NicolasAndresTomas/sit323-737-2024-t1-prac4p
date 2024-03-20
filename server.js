// Unit: SIT323 Cloud Native Application Development
// Task: 4.1P
// Date: 20/03/2024
// Student Name: Nicolas Andress Tomas (221351413)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Message for root path 
app.get('/', (req, res) => {
    res.send(
        `<strong>Welcome to the Calculator Microservice</strong><br><br>` +
        `Here's how you can use our service:<br>` +
        `- Addition: Add two numbers with <code>/add?num1={number}&amp;num2={number}</code><br>` +
        `- Subtraction: Subtract two numbers with <code>/subtract?num1={number}&amp;num2={number}</code><br>` +
        `- Multiplication: Multiply two numbers with <code>/multiply?num1={number}&amp;num2={number}</code><br>` +
        `- Division: Divide two numbers with <code>/divide?num1={number}&amp;num2={number}</code><br><br>` +
        `Just replace <code>{number}</code> with your actual numbers. For example, try visiting:<br>` +
        `<a href="http://localhost:${port}/add?num1=10&num2=5">http://localhost:${port}/add?num1=10&num2=5</a><br>`
    );
});

// Function to validate numbers
const validateNumbers = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return true;
};

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.send(`Result: ${result}`);
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        return res.status(400).send('Invalid input. Please ensure num1 and num2 are numbers.');
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).send('Cannot divide by zero.');
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});