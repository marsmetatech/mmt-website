  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAm37aHHwGf2N-v1oB8Ze0pxae1wFR_C9A",
    authDomain: "mmtw-f24a2.firebaseapp.com",
    projectId: "mmtw-f24a2",
    storageBucket: "mmtw-f24a2.firebasestorage.app",
    messagingSenderId: "990267504788",
    appId: "1:990267504788:web:8da177a3aac45c48241c81",
    measurementId: "G-9CKKEEH5HT"
  };
        
          // Initialize Firebase
          const app = firebase.initializeApp(firebaseConfig);
          const auth = firebase.auth();
          const db = firebase.firestore();
          
          function toggleChat() {
            let chatWindow = document.getElementById("chat-window");
        
            if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
                chatWindow.style.display = "block"; // Show the chat window
            } else {
                chatWindow.style.display = "none"; // Hide the chat window
            }
        }
  
  function sendMessage() {
      let inputField = document.getElementById("user-input");
      let message = inputField.value.trim();
      if (message === "") return;
  
      let chatMessages = document.getElementById("chat-messages");
      let userMessage = `<div><strong>You:</strong> ${message}</div>`;
      chatMessages.innerHTML += userMessage;
      inputField.value = "";
  
      const chatbotFunction = functions.httpsCallable('chatbot');
      chatbotFunction({ message: message }).then(result => {
          let botMessage = `<div><strong>Bot:</strong> ${result.data.reply}</div>`;
          chatMessages.innerHTML += botMessage;
      }).catch(error => console.error("Error:", error));
  }