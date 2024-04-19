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

// This code runs in the browser
console.log("Hello, World!");
