// Selecting DOM Elements
const itemNameInput = document.getElementById('itemNameInput');
const itemCostInput = document.getElementById('itemCostInput');
const addBtn = document.getElementById('addBtn');
const expenseList = document.getElementById('expenseList');

// DOM Manipulation Logic
addBtn.onclick = function() {
  const name = itemNameInput.value;
  const cost = itemCostInput.value;

  // DOM MANIPULATION: Create a new <li> element
  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>${name}</span> <strong>₦${cost}</strong>`;

  // DOM MANIPULATION: Append new element into the unordered list <ul>
  expenseList.appendChild(listItem);

  // Clear inputs
  itemNameInput.value = "";
  itemCostInput.value = "";
};