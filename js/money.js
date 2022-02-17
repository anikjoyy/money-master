function getInputValue(inputValue) {
  const inputField = document.getElementById(inputValue);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // inputField.value='';
  return amountValue;
}

/* -------------------------------------------------------
calculate section
--------------------------------------------------------------- */

document.getElementById('calculate-btn').addEventListener('click', function () {
  // taking income amount
  let incomeValue = getInputValue('income-input');

  //taking expenses value
  let foodValue = getInputValue('food-input');
  let rentValue = getInputValue('rent-input');
  let clothesValue = getInputValue('clothes-input');

  //expenses calculation section
  let totalExpenses = document.getElementById('total-expenses');
  let allExpenses = foodValue + rentValue + clothesValue;
  totalExpenses.innerText = allExpenses;

  //after expenses remaining balance calcultation
  let balance = document.getElementById('balance');
  balance.innerText = incomeValue - parseFloat(totalExpenses.innerText);
});

/* -----------------------------------
saving section
------------------------------------ */
