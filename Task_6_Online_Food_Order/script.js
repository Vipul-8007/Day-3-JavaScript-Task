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
