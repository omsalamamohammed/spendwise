function calculateBalance(budget, expenses) {
  return budget - expenses;
}

function checkBudget() {
  let budget = Number(document.getElementById('budget').value);
  let expenses = Number(document.getElementById('expenses').value);

  if (!budget || !expenses) {
    alert("Please enter numbers");
    return;
  }

  let balance = calculateBalance(budget, expenses);
  let resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';

  let status = balance >= 0 ? "You are within budget!" : "You have exceeded your budget!";
  let color = balance >= 0 ? "green" : "red";
  let emoji = balance >= 0 ? "✅" : "❌";

  resultDiv.innerHTML = "<div style='border-left:5px solid " + color + "; padding-left:10px;'><b>Budget:</b> $" + budget + "<br><b>Expenses:</b> $" + expenses + "<br><b>Balance:</b> $" + balance + "<br><br><span style='color:" + color + "; font-weight:bold;'>" + emoji + " " + status + "</span></div>";
}