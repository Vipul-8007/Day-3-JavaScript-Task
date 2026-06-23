let employee = {
  name: "Vipul",
  age: "25",
  department: "IT",
  salary: 100000,
  experience: "10 Years",
};

for (let key in employee) {
  console.log(key + " : " + employee[key]);
}
