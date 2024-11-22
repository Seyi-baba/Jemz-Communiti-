// Initialize Coin Count
let coinCount = localStorage.getItem("coinCount") ? parseInt(localStorage.getItem("coinCount")) : 0;
document.getElementById("coin-count").innerText = coinCount;

// Handle Form Submission
document.getElementById("submit-btn").addEventListener("click", function () {
  let score = 0;
  const totalQuestions = 2;

  // Check Answers
  const q1Answer = document.querySelector('input[name="q1"]:checked');
  const q2Answer = document.querySelector('input[name="q2"]:checked');

  if (q1Answer && q1Answer.value === "Paris") score++;
  if (q2Answer && q2Answer.value === "George Orwell") score++;

  // Display Score
  document.getElementById("score").innerText = `${score} / ${totalQuestions}`;
  document.getElementById("result-section").classList.remove("hidden");

  // Award Coin for Full Score
  if (score === totalQuestions) {
    coinCount++;
    localStorage.setItem("coinCount", coinCount);
    document.getElementById("coin-count").innerText = coinCount;
    document.getElementById("coin-reward-section").classList.remove("hidden");
  }
});

function ttest() {
  window.location.href = 'test.html'; 
}


// Load Purchased Tests
const purchasedTests = JSON.parse(localStorage.getItem("purchasedTests")) || [];
const purchasedTestsContainer = document.getElementById("purchased-tests");

if (purchasedTests.length > 0) {
  purchasedTests.forEach((testName) => {
    const testItem = document.createElement("div");
    testItem.classList.add("test-item");
    testItem.innerHTML = `
      <h3>${testName}</h3>
      <button class="start-test-btn" data-test="${testName}">Start Test</button>`;
    purchasedTestsContainer.appendChild(testItem);
  });
} else {
  purchasedTestsContainer.innerHTML = "<p>No tests purchased yet.</p>";
}

// Event Listener to Start Test
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("start-test-btn")) {
    const testName = e.target.dataset.test;
    alert(`Starting the ${testName}!`); // Replace with actual test interface logic
    // Redirect to the test page or load test questions
    window.location.href = `test-interface.html?test=${encodeURIComponent(testName)}`;
  }
});


