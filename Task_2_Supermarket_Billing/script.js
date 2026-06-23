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
