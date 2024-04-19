let expenses = [];
let incomes = [];

let expenseId = 0;
let incomeId = 0;

const loadExpenses = () => {
  const expensesList = document.getElementById("expenses");
  expensesList.innerHTML = "";
  for (let expense of expenses) {
    var elm = document.createElement("p");
    elm.innerHTML = `${expense.date} ------${expense.type} ------${expense.amount}DT`;
    elm.style.font = "bold";
    expensesList.appendChild(elm);
  }
};

const loadIncomes = () => {
  const expensesList = document.getElementById("incomes");
  expensesList.innerHTML = "";
  for (let income of incomes) {
    var elm = document.createElement("p");
    elm.innerHTML = `${income.date} ------${income.type} ------${income.amount}DT`;
    elm.style.font = "bold";
    incomesList.appendChild(elm);
  }
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
    amount,
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
  var elm = document.createElement("p");
  var amount = document.getElementById("amount_income").value;
  var date = document.getElementById("date_income").value;
  var type = document.getElementById("category_income").value;
  incomes.push({
    incomeId,
    date,
    amount,
    type,
  });
  incomeId++;

  elm.innerHTML = `${date} ------${type} ------${amount}DT`;
  elm.style.font = "bold";
  document.getElementById("incomes").appendChild(elm);
};

function hideShow(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
