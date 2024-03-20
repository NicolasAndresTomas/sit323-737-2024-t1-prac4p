Getting Started:
Starting the server: node server.js
Accessing the microservice through a web browser or tool


API Endpoints:
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
Invalid input: Returns a status of 400 with a message indicating that num1 and num2 must be numbers.
Division by zero: Returns a status of 400 with a message indicating that division by zero is not allowed.
