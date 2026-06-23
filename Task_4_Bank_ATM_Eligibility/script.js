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
