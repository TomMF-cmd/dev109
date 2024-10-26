// Ask the user for an input between 0-10
let table = prompt("Enter a number from 0 to 10 to generate the multiplication table:", "5");

// Creates the msg variable and the heading
let msg = '<h2>Multiplication Table</h2>';

// Ensure the input is valid and within the correct range
if (table !== null && table >= 0 && table <= 10) {
  table = parseInt(table); // Convert the input to an integer

  // Uses a for statment to create the table 
  for (let i = 1; i <= 10; i++) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
  }
}

// Display the result inside the blackboard section
document.getElementById('blackboard').innerHTML = msg;
