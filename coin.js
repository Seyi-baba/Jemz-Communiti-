// Load Coin Balance from localStorage
let coinBalance = parseInt(localStorage.getItem("coinBalance")) || 50;  // Default 50 coins
const coinCountElement = document.getElementById("coin-count");
const purchaseMessage = document.getElementById("purchase-message");

// Get Purchased Tests from LocalStorage
let purchasedTests = JSON.parse(localStorage.getItem("purchasedTests")) || [];

// Update Coin Balance
const updateCoinBalance = () => {
  coinCountElement.textContent = coinBalance;
  localStorage.setItem("coinBalance", coinBalance);  // Save to localStorage
};

// Save Purchased Tests to LocalStorage
const savePurchasedTests = () => {
  localStorage.setItem("purchasedTests", JSON.stringify(purchasedTests));
};

// Show Purchase Message
const showPurchaseMessage = (message, type) => {
  purchaseMessage.textContent = message;
  purchaseMessage.className = `purchase-message ${type}`;
  purchaseMessage.classList.remove("hidden");
  setTimeout(() => {
    purchaseMessage.classList.add("hidden");
  }, 3000);
};

// Handle Buy Button Clicks
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = parseInt(button.dataset.cost, 10);
    const testName = button.dataset.test;

    if (coinBalance >= cost) {
      if (!purchasedTests.includes(testName)) {
        purchasedTests.push(testName);
        savePurchasedTests();
        coinBalance -= cost;
        updateCoinBalance();
        showPurchaseMessage(`You purchased the ${testName}!`, "success");
      } else {
        showPurchaseMessage("You already own this test.", "error");
      }
    } else {
      showPurchaseMessage("Not enough coins to purchase this test.", "error");
    }
  });
});

// Initialize Coin Balance
updateCoinBalance();
