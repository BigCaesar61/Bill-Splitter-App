//Task 1: Calculate the Tip

//Bill Amount
let bill = 275;

//ternary operator
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log(tip); //outputs tip value