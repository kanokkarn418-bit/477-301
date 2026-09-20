/**
 * Lab Assignment: JavaScript Exercises
 * Author: Student
 * Description: Modular JavaScript logic covering 5 assignment requirements with interactive DOM manipulation.
 */

// ==========================================
// 1. Order Calculator
// Given price and quantity, output subtotal, 7% VAT, and total.
// ==========================================
function calculateOrder(price, quantity) {
  const subtotal = price * quantity;
  const vat = subtotal * 0.07;
  const total = subtotal + vat;
  
  return { subtotal, vat, total };
}

function runOrderCalculator() {
  const price = parseFloat(document.getElementById('calcPrice').value) || 0;
  const qty = parseInt(document.getElementById('calcQty').value) || 0;
  
  const res = calculateOrder(price, qty);
  
  document.getElementById('calcResult').innerHTML = `
    <div class="result-row"><span>Subtotal:</span> <span>฿${res.subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
    <div class="result-row"><span>VAT (7%):</span> <span>฿${res.vat.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
    <div class="result-row"><span>Total:</span> <span>฿${res.total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
  `;
}

// ==========================================
// 2. Delivery Rule
// Use if / else if / else to decide the delivery charge.
// ==========================================
function getDeliveryCharge(cartAmount) {
  let charge = 0;
  let statusText = "";

  if (cartAmount >= 1000) {
    charge = 0;
    statusText = "Free Shipping Tier (≥ ฿1,000)";
  } else if (cartAmount >= 500) {
    charge = 40;
    statusText = "Special Rate Tier (฿500 - ฿999)";
  } else {
    charge = 80;
    statusText = "Standard Rate (< ฿500)";
  }

  return { charge, statusText };
}

function runDeliveryRule() {
  const amount = parseFloat(document.getElementById('cartAmount').value) || 0;
  const res = getDeliveryCharge(amount);

  document.getElementById('deliveryResult').innerHTML = `
    <div class="result-row"><span>Tier:</span> <span>${res.statusText}</span></div>
    <div class="result-row"><span>Delivery Fee:</span> <span>฿${res.charge}</span></div>
  `;
}

// ==========================================
// 3. Cart Total
// Loop through an array of prices and sum them.
// ==========================================
function sumCartPrices(priceArray) {
  let total = 0;
  // Loop through an array of prices
  for (let i = 0; i < priceArray.length; i++) {
    total += priceArray[i];
  }
  return total;
}

function runCartTotal() {
  const inputVal = document.getElementById('cartPricesInput').value;
  const prices = inputVal.split(',').map(item => parseFloat(item.trim()) || 0);
  
  const total = sumCartPrices(prices);

  document.getElementById('cartTotalResult').innerHTML = `
    <div class="result-row"><span>Items Count:</span> <span>${prices.length} items</span></div>
    <div class="result-row"><span>Cart Grand Total:</span> <span>฿${total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
  `;
}

// ==========================================
// 4. Discount Function
// Write a reusable function that takes an amount and a percentage.
// ==========================================
function calculateDiscount(amount, percentage) {
  const discountAmount = (amount * percentage) / 100;
  const finalPrice = amount - discountAmount;
  return { discountAmount, finalPrice };
}

function runDiscountFunction() {
  const amount = parseFloat(document.getElementById('discAmount').value) || 0;
  const percent = parseFloat(document.getElementById('discPercent').value) || 0;

  const res = calculateDiscount(amount, percent);

  document.getElementById('discountResult').innerHTML = `
    <div class="result-row"><span>Discount Savings:</span> <span style="color: #f59e0b;">-฿${res.discountAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
    <div class="result-row"><span>Final Price:</span> <span>฿${res.finalPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
  `;
}

// ==========================================
// 5. Product Object
// Build an array of product objects and print each name and price.
// ==========================================
const products = [
  { id: 1, name: "Wireless Mouse", price: 590, category: "Tech" },
  { id: 2, name: "Mechanical Keyboard", price: 2490, category: "Tech" },
  { id: 3, name: "Ceramic Coffee Mug", price: 190, category: "Home" },
  { id: 4, name: "A5 Minimal Journal", price: 85, category: "Stationery" }
];

function renderProductList() {
  const listContainer = document.getElementById('productList');
  if (!listContainer) return;

  listContainer.innerHTML = products.map(prod => `
    <div class="product-item">
      <span class="product-name">📦 ${prod.name}</span>
      <span class="product-price">฿${prod.price.toLocaleString()}</span>
    </div>
  `).join('');
}

// Automatically execute on initial page load
window.addEventListener('DOMContentLoaded', () => {
  runOrderCalculator();
  runDeliveryRule();
  runCartTotal();
  runDiscountFunction();
  renderProductList();
});