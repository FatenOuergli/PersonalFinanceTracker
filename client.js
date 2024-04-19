// Function to toggle visibility of the specified element
const hideShow = (elementId) => {
  const element = document.getElementById(elementId);

  // Toggle the display style
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

// Function to handle the form submission for adding expenses
const addExpense = () => {
  const amount = document.getElementById("description1").value;
  const date = document.getElementById("date1").value;
  const note = document.getElementById("note1").value;

  // Create an object with the form data
  const expenseData = {
    amount,
    date,
    note,
  };

  // Send the expense data to the server
  // fetch("/addExpense", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(expenseData),
  // })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
};

// Function to handle the form submission for adding income
const addIncome = () => {
  const amount = document.getElementById("description2").value;
  const date = document.getElementById("date2").value;
  const note = document.getElementById("note2").value;

  // Create an object with the form data
  const incomeData = {
    amount,
    date,
    note,
  };

  // Send the income data to the server
  // fetch("/addIncome", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(incomeData),
  // })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
};

const update = () => {
  console.log("added");
  var elm = document.createElement("p");
  var amount = document.getElementById("amount").value;
  var Date = document.getElementById("Date").value;
  var type = document.getElementById("Category").value;
  elm.innerHTML = `${Date} ------${type} ------${amount}DT`;
  elm.style.font = "bold";
  document.getElementById("recenttransaction").appendChild(elm);
};
function hideShow(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
