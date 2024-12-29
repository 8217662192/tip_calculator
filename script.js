// Function to calculate the tip and total
function calculateTip() {
    // Get the values from the input fields
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    // Validation: Check if inputs are numbers and greater than zero
    if (isNaN(billAmount) || billAmount <= 0 || isNaN(tipPercentage) || tipPercentage <= 0) {
        alert("Please enter valid positive numbers for both Bill Amount and Tip Percentage.");
        return;
    }

    // Calculate tip amount and total amount
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Display the results
    document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}
