const validPin = 1234
// add money

document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    console.log('add money btn ')
    const bank = document.getElementById("bank").value

    const accountNumber = document.getElementById("account-number").value

    const amount = parseInt(document.getElementById("add-amount").value)

    const pin = parseInt(document.getElementById("add-pin").value);
    
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    console.log(availableBalance)

    if (accountNumber.length < 11) {
        alert("Pleade provide valid account number")
        return;
    }
    if (pin !== validPin) {
        alert("Pleade provide valid pin number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById("available-balance").innerText=totalNewAvailableBalance
});

// cash out
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText)
    
    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

    const bNumber = document.getElementById("b-number").value

    const pinNo = parseInt(document.getElementById("addpin").value);
    
    if (bNumber.length < 11) {
      alert("Pleade provide valid account number");
      return;
    }
    if (pinNo !== validPin) {
      alert("Pleade provide valid pin number");
      return;
    }

});



// toggling feature

document.getElementById("add-button").addEventListener('click', function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display="block"
})
document
  .getElementById("cash-out-button")
    .addEventListener("click", function () {
      document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
    
  });