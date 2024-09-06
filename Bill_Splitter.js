//Task 1: Calculate the Tip

//Bill Amount
let bill = 275;

//ternary operator
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log(tip); //outputs tip value

//Task 2: Output Details

let total = bill + tip;

//output details
console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}`);


//Task 3: Create calculateTip function

const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
//Testing function
let testBill = 100;
let testTip = calculateTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${testTip.toFixed(2)}, and the total value is $${total.toFixed(2)}`);

//Task 4: Utilize Arrays

const bills = [275, 40, 430, 125, 555, 44];
const tips = bills.map(bill => calculateTip(bills));
const totals = bills.map((bill, index) => bill + tips[index]);

///Display arrays
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Totals: ", totals);