let income = 0;
let expenses = 0;

const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");

const myChart = new Chart(document.getElementById("myChart").getContext("2d"), {
  type: "pie",
  data: {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Spending",
        data: [income, expenses],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  },
});

function addTransaction() {
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!isNaN(amount)) {
    if (category === "income") {
      income += amount;
    } else if (category === "expenses") {
      expenses += amount;
    }

    updateChart();
    amountInput.value = "";
  }
}

function updateChart() {
  myChart.data.datasets[0].data = [income, expenses];
  myChart.update();
}
