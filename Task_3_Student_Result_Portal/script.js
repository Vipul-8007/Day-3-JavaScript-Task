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
