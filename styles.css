/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Courier New', Courier, monospace;
    background: linear-gradient(135deg, #e7d9c1 50%, #f9b208 50%);
    color: #333;
    transition: background 0.3s, color 0.3s;
    position: relative;
    overflow: hidden;
  }
  
  body.dark-mode {
    background: linear-gradient(135deg, #1b1b2f 50%, #007acc 50%);
    color: #c9c9c9;
  }
  
  .container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.85);
    border: 2px solid #007acc;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  /* Logo styling */
.logo-container {
  position: relative;
  z-index: 2; /* Ensures the logo appears above the background */
  text-align: center;
}

.logo {
  max-width: 300px;
  height: auto;
  opacity: 0;
  animation: fadeInLogo 2s ease-in-out 1s forwards;
}

/* Fading logo animation */
@keyframes fadeInLogo {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  header h1 {
    font-size: 3rem;
    color: rgb(4, 4, 91);
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  #themeToggle {
    padding: 10px 20px;
    background: #007acc;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  #themeToggle:hover {
    background: #005f99;
  }
  
  .task-input {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    padding: 10px;
    font-size: 1rem;
    border: 2px solid #007acc;
    border-radius: 5px;
    flex: 1;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background: #007acc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #005f99;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
  }
  
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    background: #1b1b2f;
    color: white;
    border: 2px solid #007acc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .task.completed span {
    text-decoration: line-through;
    color: #c9c9c9;
  }
  
  .progress-container {
    margin: 20px 0;
    background: #ccc;
    height: 20px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  #progressBar {
    background: #2a9d8f;
    height: 100%;
    width: 0;
    transition: width 0.3s;
  }
  
  /* Miss Minutes Sneaking */
  .miss-minutes {
    position: absolute;
    bottom: -30px;
    left: -100px;
    z-index: 2;
    animation: sneakBehind 8s infinite ease-in-out;
  }
  
  .miss-minutes img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  }
  
  @keyframes sneakBehind {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px); /* Subtle peek */
    }
  }
  
  /* Badge at Footer */
  footer {
    margin-top: 20px;
  }
  
  #badgeArea {
    font-size: 1.2rem;
    background: #f9b208;
    color: black;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  /* TVA-Inspired Background Design */
  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-radial-gradient(
      circle,
      rgba(0, 0, 0, 0.1) 0,
      rgba(0, 0, 0, 0.1) 5px,
      transparent 5px,
      transparent 10px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 0,
      rgba(0, 0, 0, 0.1) 5px,
      transparent 5px,
      transparent 10px
    );
    opacity: 0.2;
    z-index: -1;
  }
  /* Scrollbar for the task list */
#taskList {
  max-height: 300px; /* Set a maximum height for the task list */
  overflow-y: auto; /* Enable vertical scrolling */
  margin: 0 auto;
  padding: 10px;
  border: 2px solid #007acc;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Custom scrollbar styles */
#taskList::-webkit-scrollbar {
  width: 8px; /* Scrollbar width */
}

#taskList::-webkit-scrollbar-track {
  background: #e0e0e0; /* Track color */
  border-radius: 5px;
}

#taskList::-webkit-scrollbar-thumb {
  background: #007acc; /* Thumb (scroll indicator) color */
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

#taskList::-webkit-scrollbar-thumb:hover {
  background: #005f99; /* Thumb color on hover */
}
/* Ensure the entire page is scrollable */
body {
  height: 100vh;
  overflow-y: auto; /* Enable vertical scrolling */
}

/* Custom scrollbar styles for the entire page */
body::-webkit-scrollbar {
  width: 10px; /* Width of the scrollbar */
}

body::-webkit-scrollbar-track {
  background: #f0f0f0; /* Track background color */
  border-radius: 5px;
}

body::-webkit-scrollbar-thumb {
  background: #007acc; /* Thumb (scroll indicator) color */
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3); /* Subtle shadow for thumb */
}

body::-webkit-scrollbar-thumb:hover {
  background: #005f99; /* Thumb color on hover */
}

  
