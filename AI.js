// Elements
const aiIcon = document.getElementById("ai-icon");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const userInput = document.getElementById("user-input");
const sendMessage = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");

// Open Chat Window
aiIcon.addEventListener("click", () => {
  chatWindow.classList.toggle("open");
});

// Close Chat Window
closeChat.addEventListener("click", () => {
  chatWindow.classList.remove("open");
});

// Add Typing Indicator
const showTypingIndicator = () => {
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("typing");
  typingDiv.textContent = "AI is typing...";
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return typingDiv;
};

// Remove Typing Indicator
const removeTypingIndicator = (typingDiv) => {
  chatMessages.removeChild(typingDiv);
};

// Handle Sending Messages
sendMessage.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage("user", userMessage);
    userInput.value = "";
    const typingDiv = showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator(typingDiv);
      handleResponse(userMessage);
    }, 1000); // Simulate AI typing delay
  }
});

// Append Messages
const appendMessage = (sender, text) => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

// AI Responses
const handleResponse = (message) => {
  let response;
  if (message.toLowerCase().includes("test")) {
    response = "You can take a test by clicking on the 'Take Test' section.";
  } else if (message.toLowerCase().includes("coins")) {
    response = "Coins are earned by completing tests and getting correct answers!";
  } else if (message.toLowerCase().includes("achievements")) {
    response = "Check your achievements page to see your progress.";
  } else {
    response = "I'm here to help! Ask me anything about Jemz Communiti.";
  }
  appendMessage("ai", response);
};
