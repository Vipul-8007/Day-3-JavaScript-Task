let storedUsername = "admin";
let storedPassword = "12345";

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username == storedUsername && password == storedPassword) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}
