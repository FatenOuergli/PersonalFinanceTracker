let expenses = [];
let incomes = [];

let expenseId = 0;
let incomeId = 0;

const recalculateNetworth = () => {
  const bankAccountNetworth = document.getElementById("bankAccount_networth");
  const savingsNetworth = document.getElementById("savings_networth");
  const creditsNetworth = document.getElementById("credits_networth");
  let BASum = 0;
  let SSum = 0;
  let CSum = 0;
  for (let expense of expenses) {
    switch (expense.type) {
      case "banAccount":
        BASum -= expense.amount;
        break;
      case "Savings":
        SSum -= expense.amount;
        break;
      case "Credits":
        CSum -= expense.amount;
        break;
      default:
        break;
    }
  }
  for (let income of incomes) {
    switch (income.type) {
      case "banAccount":
        BASum += income.amount;
        break;
      case "Savings":
        SSum += income.amount;
        break;
      case "Credits":
        CSum += income.amount;
        break;
      default:
        break;
    }
  }
  bankAccountNetworth.innerHTML = "";
  savingsNetworth.innerHTML = "";
  creditsNetworth.innerHTML = "";

  bankAccountNetworth.innerHTML = BASum;
  savingsNetworth.innerHTML = SSum;
  creditsNetworth.innerHTML = CSum;
  if (BASum < 100) {
    bankAccountNetworth.style.color = "red";
  } else {
    bankAccountNetworth.style.color = "black";
  }
  if (SSum < 100) {
    savingsNetworth.style.color = "red";
  } else {
    savingsNetworth.style.color = "black";
  }
  if (CSum < 100) {
    creditsNetworth.style.color = "red";
  } else {
    creditsNetworth.style.color = "black";
  }
};

const loadExpenses = () => {
  const expensesList = document.getElementById("expenses");
  expensesList.innerHTML = "";
  for (let expense of expenses) {
    var elm = document.createElement("p");
    elm.innerHTML = `${expense.date} ------${expense.type} ------${expense.amount}DT`;
    elm.style.font = "bold";
    expensesList.appendChild(elm);
  }
  recalculateNetworth();
};

const loadIncomes = () => {
  const incomesList = document.getElementById("incomes");
  incomesList.innerHTML = "";
  for (let income of incomes) {
    var elm = document.createElement("p");
    elm.innerHTML = `${income.date} ------${income.type} ------${income.amount}DT`;
    elm.style.font = "bold";
    incomesList.appendChild(elm);
  }
  recalculateNetworth();
};

const updateExpense = (event) => {
  event.preventDefault();
  console.log("added");
  var amount = document.getElementById("amount_expense").value;
  var date = document.getElementById("date_expense").value;
  var type = document.getElementById("category_expense").value;
  expenses.push({
    expenseId,
    date,
    amount: parseFloat(amount),
    type,
  });
  expenseId++;
  loadExpenses();
  // elm.innerHTML = `${date} ------${type} ------${amount}DT`;
  // elm.style.font = "bold";
  // document.getElementById("expenses").appendChild(elm);
};

const updateIncome = (event) => {
  event.preventDefault();
  console.log("added");
  var amount = document.getElementById("amount_income").value;
  var date = document.getElementById("date_income").value;
  var type = document.getElementById("category_income").value;
  incomes.push({
    incomeId,
    date,
    amount: parseFloat(amount),
    type,
  });
  incomeId++;
  loadIncomes();
};

function hideShow(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
