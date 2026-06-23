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
