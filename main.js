const initPinScreen = (selector, onEnter) => {
	const container = document.querySelector(selector);
	const input = container.querySelector(".pin-value");
	const keys = container.querySelectorAll(".pin-keyboard-key");
  
	// Function to clear the input
	const clear = () => {
	  input.value = "";
	};
  
	// Loop through all the keys and add event listeners
	for (const key of keys) {
	  key.addEventListener("click", () => {
		const value = key.textContent.trim();
  
		if (key.classList.contains("pin-keyboard-key--clear")) {
		  clear();
		} else if (key.classList.contains("pin-keyboard-key--enter")) {
		  // Only trigger the onEnter function if there is a value entered
		  if (input.value) {
			onEnter(input.value, clear);
		  }
		} else {
		  input.value += value;  // Add the clicked key to the input value
		}
	  });
	}
  };
  
  // Initialize the pin screen with a callback to handle the entered pin
  initPinScreen("#mainPinScreen", (pin, clear) => {
	console.log(`Entered Pin: ${pin}`);
  
	// Simulate pin validation (you can replace this with actual validation logic)
	const validPin = "1101";  // Hardcoded valid PIN for demonstration purposes
  
	if (pin === validPin) {
	  // If PIN is valid, redirect to the home page
	  window.location.href = "home.html";  
  
	} else {
	  // Handle invalid PIN (you can show an error message here)
	  alert("Invalid PIN. Please try again.");
	}
  
	// Clear the input field after checking
	clear();
  });