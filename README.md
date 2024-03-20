Getting Started:

Start the server by inputting "node server.js" into the terminal, be sure to access the microservice through either a web browser or tool.


API Endpoints:

To use the Calculator Microservice, be sure to reference the root paths for each arithmetic operation.

Addition (/add):
- Description: Adds two numbers.
- Usage: /add?num1=1&num2=2
- Expected result: Result: 3

Subtraction (/subtract):
- Description: Subtracts one number from another.
- Usage: /subtract?num1=5&num2=2
- Expected result: Result: 3

Multiplication (/multiply):
- Description: Multiplies two numbers.
- Usage: /multiply?num1=3&num2=4
- Expected result: Result: 12

Division (/divide):
- Description: Divides one number by another.
- Usage: /divide?num1=8&num2=2
- Note: Division by zero will return an error.
- Expected result: Result: 4


Error Handling:

Validation for the incorrect input will return a status of 400 with a message indicating that num1 and num2 must be numbers. This also applies in division, when using a zero input number it returns a status of 400 with a message indicating that division by zero is not allowed.
