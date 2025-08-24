const validPin = 1234;
const transactionData=[]
// add money

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn ");
    const bank = document.getElementById("bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);
    if (amount <= 0) {
      alert("invaild amount")
      return;
    }

    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    console.log(availableBalance);

    if (accountNumber.length < 11) {
      alert("Pleade provide valid account number");
      return;
    }
    if (pin !== validPin) {
      alert("Pleade provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    
    const data = {
      name: 'Add Money',
      date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
  });
  // cash out
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (amount <= 0 || amount > availableBalance) {
    alert("invaild amount")
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;

  const bNumber = document.getElementById("b-number").value;

  const pinNo = parseInt(document.getElementById("addpin").value);

  if (bNumber.length < 11) {
    alert("Pleade provide valid account number");
    return;
  }
  if (pinNo !== validPin) {
    alert("Pleade provide valid pin number");
    return;
  }
  const data = {
      name: 'Cash Out',
      date:new Date().toLocaleTimeString()
    }
    transactionData.push(data)
});

// transctions
document.getElementById("transaction-button").addEventListener('click', function () {
  const transactionContainer = document.getElementById("transaction-container")
  transactionContainer.innerText=''

  for (const data of transactionData) {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class=" bg-white mt-3 rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center">
                    <div class=" p-3 rounded-full bg-[#f4f5f7]">
                         <img class="mx-auto" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>`;
    
    transactionContainer.appendChild(div)
  }
})



// function toggole
function handleToggle(id) {
  document.getElementById("add-button").addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
  });
}

// funtion to toggole button

function handleButtonToggle(id) {
   const formBtns = document.getElementsByClassName("form-btn");

   for (const btn of formBtns) {
     btn.classList.remove("border-[#0874f2", "bg-[#0874f20d]");
     btn.classList.add("border-gray-300");
   }
   document.getElementById(id).classList.remove("border-gray-300");
   document.getElementById(id).classList.add("border-[#0874f2", "bg-[#0874f20d]");
}

// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById("add-money-parent").style.display = "block";
  handleButtonToggle("add-button");
  //  bg color and border color
  // const formBtns = document.getElementsByClassName("form-btn");

  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("add-button").classList.remove("border-gray-300");
  // document
  //   .getElementById("add-button")
  //   .classList.add("border-[#0874f2", "bg-[#0874f20d]");
  //   document.getElementById("cash-out-parent").style.display = "none"
  // document.getElementById("add-money-parent").style.display = "block"
  // document.getElementById("transfer-money-parent").style.display = "none";
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }

    document.getElementById("cash-out-parent").style.display = "block";
    // bg color and border color

    handleButtonToggle("cash-out-button");
    //   document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "block";
    // document.getElementById("transfer-money-parent").style.display = "none";
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("transfer-money-parent").style.display = "block";
    // bg color and border color
    handleButtonToggle("transfer-button");
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display='block';
  });
  // get bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById("get-bonus-parent").style.display = "block";

  // bg color and border color

  handleButtonToggle("bonus-button");
});
//  pay bil
document.getElementById("pay-button").addEventListener("click", function () {
  handleToggle("pay-bil-parent")
  const forms = document.getElementsByClassName("form")
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById("pay-bil-parent").style.display = "block";
  handleButtonToggle("pay-button")
  
})
// transctions
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle("pay-bil-parent");
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("transactions-parent").style.display = "block";
    handleButtonToggle("transaction-button");
  });
 
  
