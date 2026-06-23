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
