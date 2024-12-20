const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Toggle Contact Form Visibility
function toggleContactForm() {
	const contactForm = document.getElementById("contact-form");
	contactForm.style.display =
	  contactForm.style.display === "flex" ? "none" : "flex";
  }
  
  // Handle Form Submission
  document.getElementById("messageForm").addEventListener("submit", (e) => {
	e.preventDefault();
  
	// Get form data
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;
  
	// Example: Send the message to your email
	alert(
	  `Thank you, ${name}! Your message has been sent.\n\nMessage: ${message}`
	);
  
	// Close the form after submission
	toggleContactForm();
  
	// Reset the form
	e.target.reset();
  });
  
  