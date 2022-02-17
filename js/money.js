// created function for taking income
function getIncomeValue(incomeAmount) {
  const incomeField = document.getElementById(incomeAmount);
  const incomeAmountText = incomeField.value;
  const incomeAmountValue = parseFloat(incomeAmountText);

  //incomeField.value = '';
  return incomeAmountValue;
}

//created function for taking expenses input
function getExpensesValue(inputValue) {
  const inputField = document.getElementById(inputValue);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  inputField.value = '';
  return amountValue;
}

/* -------------------------------------------------------
calculate section
--------------------------------------------------------------- */

document.getElementById('calculate-btn').addEventListener('click', function () {
  // taking income amount
  let incomeValue = getIncomeValue('income-input');

  //taking expenses value
  let foodValue = getExpensesValue('food-input');
  let rentValue = getExpensesValue('rent-input');
  let clothesValue = getExpensesValue('clothes-input');

  //   checking error for invalid  input from user
  if (
    (incomeValue >= 0 &&
      foodValue >= 0 &&
      rentValue >= 0 &&
      clothesValue >= 0) ||
    (incomeValue == 'Number' &&
      foodValue == 'Number' &&
      rentValue == 'Number' &&
      clothesValue == 'Number')
  ) {
    //expenses calculation section
    let totalExpenses = document.getElementById('total-expenses');
    let allExpenses = foodValue + rentValue + clothesValue;

    //error checking if the expenses is greater than income amount
    if (incomeValue < allExpenses) {
      window.alert('Error!!Your Expenses cant be greater than your Income.');
    } else {
      totalExpenses.innerText = allExpenses;

      //after expenses remaining balance calcultation
      let balance = document.getElementById('balance');
      balance.innerText = incomeValue - parseFloat(allExpenses);
    }
  } else {
    window.alert('Invalid Input!! Please Give an Positive Number.');
  }
});

/* -----------------------------------
saving section
------------------------------------ */
document.getElementById('save-btn').addEventListener('click', function () {
  // taking income amount
  let incomeValue = getIncomeValue('income-input');

  let saveField = document.getElementById('save-input');
  let saveAmountText = saveField.value;
  let saveAmountValue = parseFloat(saveAmountText);

  saveField.value = '';

  //checking if user give an unexpected save amount
  if (saveAmountValue >= 0 || saveAmountValue == 'Number') {
    //save percentage calcultation
    let incomePercentage = incomeValue * 0.1;
    let savingPercentage = saveAmountValue * 0.1;
    let savingValue = (incomePercentage * savingPercentage).toFixed(2);

    //showing the saving amount
    let savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savingValue;
  } else {
    window.alert('Invalid Input!! Please Give an Positive Number.');
  }

  //showing remaining balance
  let remainingBalanceField = document.getElementById('remaining-balance');
});
