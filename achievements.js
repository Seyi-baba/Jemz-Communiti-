// Achievement Data
const achievements = {
    "test-completion": {
      name: "Complete a Test",
      unlocked: false,
      icon: "test-icon.png"
    },
    "first-coin": {
      name: "Earn Your First Coin",
      unlocked: false,
      icon: "coin-icon.png"
    },
    "perfect-score": {
      name: "Get a Perfect Score",
      unlocked: false,
      icon: "trophy-icon.png"
    },
    "five-coins": {
      name: "Earn 5 Coins",
      unlocked: false,
      icon: "stacked-coins-icon.png"
    }
  };
  
  // Load Achievements from Local Storage
  const loadAchievements = () => {
    const savedData = localStorage.getItem("achievements");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return achievements;
  };
  
  // Save Achievements to Local Storage
  const saveAchievements = (data) => {
    localStorage.setItem("achievements", JSON.stringify(data));
  };
  
  // Unlock an Achievement
  const unlockAchievement = (id) => {
    if (achievementData[id]) {
      achievementData[id].unlocked = true;
      saveAchievements(achievementData);
      renderAchievements();
    }
  };
  
  // Render Achievements
  const renderAchievement = () => {
    const achievementContainer = document.querySelector(".achievements-grid");
    achievementContainer.innerHTML = "";
  
    for (const id in achievementData) {
      const { name, unlocked, icon } = achievementData[id];
      const achievementDiv = document.createElement("div");
      achievementDiv.classList.add("achievement");
      achievementDiv.dataset.id = id;
  
      const img = document.createElement("img");
      img.src = unlocked ? icon : "lock-icon.png";
      img.alt = unlocked ? name : "Locked";
      img.classList.add("achievement-icon", unlocked ? "unlocked" : "lock");
  
      const p = document.createElement("p");
      p.textContent = name;
  
      achievementDiv.appendChild(img);
      achievementDiv.appendChild(p);
      achievementContainer.appendChild(achievementDiv);
    }
  };
  
  // Initialize Achievements
  let achievementData = loadAchievements();
  renderAchievements();
  
  // Example Unlock Logic (Replace with Real Logic)
  document.addEventListener("DOMContentLoaded", () => {
    // Example: Unlock "Complete a Test" when a test is taken
    unlockAchievement("test-completion");
  
    // Example: Unlock "First Coin" when a coin is earned
    unlockAchievement("first-coin");
  });

  const renderAchievements = () => {
    const achievementContainer = document.querySelector(".achievements-grid");
    achievementContainer.innerHTML = "";
  
    for (const id in achievementData) {
      const { name, unlocked, icon } = achievementData[id];
      const achievementDiv = document.createElement("div");
      achievementDiv.classList.add("achievement");
      achievementDiv.dataset.id = id;
  
      // Main Icon
      const img = document.createElement("img");
      img.src = unlocked ? icon : "lock-icon.png";
      img.alt = unlocked ? name : "Locked";
      img.classList.add("achievement-icon", unlocked ? "unlocked" : "lock");
  
      // Trophy Icon
      const trophyImg = document.createElement("img");
      trophyImg.src = "trophy-icon.png"; // Use a placeholder or your trophy image URL
      trophyImg.alt = "Trophy";
      trophyImg.classList.add("trophy-icon", unlocked ? "unlocked-trophy" : "lock");
  
      // Name
      const p = document.createElement("p");
      p.textContent = name;
  
      achievementDiv.appendChild(img);        // Main Icon
      achievementDiv.appendChild(trophyImg); // Trophy Icon
      achievementDiv.appendChild(p);         // Name
      achievementContainer.appendChild(achievementDiv);
    }
  };
  
  