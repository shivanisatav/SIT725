const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3003;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// GET endpoint to perform arithmetic operations
app.get("/calculate", (req, res) => {
  const numA = parseFloat(req.query.numA);
  const numB = parseFloat(req.query.numB);
  const operator = req.query.operator; 

  // Validate inputs
  if (isNaN(numA) || isNaN(numB)) {
    return res.send("Error: Please enter two valid numbers.");
  }

  let result;
  switch (operator) {
    case "+":
      result = numA + numB;
      break;
    case "-":
      result = numA - numB;
      break;
    case "*":
      result = numA * numB;
      break;
    case "/":
      result = numB !== 0 ? numA / numB : "Error: Division by zero is not allowed.";
      break;
    default:
      return res.send("Error: Invalid operator. Use +, -, *, or /.");
  }

  res.send(`<h2>Result of ${numA} ${operator} ${numB} is: ${result}</h2>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
