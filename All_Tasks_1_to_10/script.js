console.log("--------------------------------------------");
console.log(" TASK 1 - Employee Information System");
console.log("--------------------------------------------");

let empName = prompt("Enter Employee Name");
let empAge = prompt("Enter Employee Age");
let empDep = prompt("Enter Employee Department");
let empSalary = Number(prompt("Enter Employee Salary"));

let employee = {
  name: empName,
  age: empAge,
  department: empDep,
  salary: empSalary,
};

console.log("Employee Details: ");

console.log("Name: " + employee.name);
console.log("Age: " + employee.age);
console.log("Department: " + employee.department);
console.log("Salary: " + employee.salary);

if (empSalary > 30000) {
  console.log("Eligible for Bonus");
} else {
  console.log("Not Eligible for Bonus");
}

console.log("--------------------------------------------");
console.log(" TASK 2 - Supermarket Billing");
console.log("--------------------------------------------");

let proName = prompt("Enter Product Name");
let proPrice = Number(prompt("Enter Product Price"));
let proQuantity = Number(prompt("Enter Product Quantity"));

console.log("Product Name: " + proName);
console.log("Product Price: " + proPrice);
console.log("Product Quantity: " + proQuantity);

let totalBill = proPrice * proQuantity;

console.log("Total Bill: " + totalBill);

if (totalBill > 5000) {
  let discount = (totalBill * 10) / 100;

  console.log("Discount: " + discount);

  let finalAmount = totalBill - discount;
  console.log("Final Bill After Discount: " + finalAmount);
} else {
  console.log("No Discount");
  console.log("Final Bill: " + totalBill);
}

console.log("--------------------------------------------");
console.log(" TASK 3 - Student Result Portal");
console.log("--------------------------------------------");

let sName = prompt("Enter Student Name");
let sMarks = Number(prompt("Enter Student Marks"));

console.log("Student Name: " + sName);
console.log("Student Marks: " + sMarks);

if (sMarks > 100 || sMarks < 0) {
  console.log("Please Enter Correct Marks");
} else if (sMarks >= 90) {
  console.log("Grade A");
} else if (sMarks >= 75) {
  console.log("Grade B");
} else if (sMarks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

console.log("--------------------------------------------");
console.log(" TASK 4 - Bank ATM Eligibility");
console.log("--------------------------------------------");

let name = prompt("Enter Your Name");
let accountBalance = Number(prompt("Enter Account Balance"));
let withdrawalAmount = Number(prompt("Enter Withdrawal Amount"));

console.log("Name: " + name);
console.log("Account Balance: " + accountBalance);
console.log("Withdrawal Amount: " + withdrawalAmount);

if (withdrawalAmount <= accountBalance) {
  console.log("Transaction Successful");
} else {
  console.log("Insufficient Balance");
}

console.log("--------------------------------------------");
console.log(" TASK 5 - Login Validation");
console.log("--------------------------------------------");

let storedUsername = "admin";
let storedPassword = "12345";

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username == storedUsername && password == storedPassword) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

console.log("--------------------------------------------");
console.log(" TASK 6 - Online Food Order");
console.log("--------------------------------------------");

let foodItems = [
  "Vada",
  "Chapati",
  "Pasta",
  "Sandwich",
  "Rice",
  "Biryani",
  "Soup",
  "Ice Cream",
];
console.log("First Food: " + foodItems[0]);
console.log("Last Food: " + foodItems[foodItems.length - 1]);
console.log("Total Number of Items: " + foodItems.length);
console.log("");

console.log("All food Items");
for (let food of foodItems) {
  console.log(food);
}

console.log("--------------------------------------------");
console.log(" TASK 7 - Company Employee Directory");
console.log("--------------------------------------------");

let employe = {
  name: "Vipul",
  age: "25",
  department: "IT",
  salary: 100000,
  experience: "10 Years",
};

for (let key in employe) {
  console.log(key + " : " + employe[key]);
}

console.log("--------------------------------------------");
console.log(" TASK 8 - Traffic Signal System");
console.log("--------------------------------------------");

let signal = prompt("Enter Signal Color (Red / Yellow / Green)");

switch (signal) {
  case "Red":
    console.log("Stop");
    break;

  case "Yellow":
    console.log("Ready");
    break;

  case "Green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
    break;
}

console.log("--------------------------------------------");
console.log(" TASK 9 - Age Category Checker");
console.log("--------------------------------------------");

let age = Number(prompt("Enter Your Age"));

if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior Citizen");
} else {
  console.log("Invalid Age");
}

console.log("--------------------------------------------");
console.log(" TASK 10 - Employee Attendance");
console.log("--------------------------------------------");

let employeeName = prompt("Enter Employee Name");
let attendance = prompt("Enter Your Attendance (Present/Absent)");

console.log("Welcome " + employeeName);

attendance == "Present"
  ? console.log("Attendance : Present")
  : console.log("Attendance : Absent");
