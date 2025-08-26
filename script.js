// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form functionality (frontend only)
const form = document.querySelector(".contact-form");
const nameInput = form.querySelector("input[type='text']");
const emailInput = form.querySelector("input[type='email']");
const messageInput = form.querySelector("textarea");
const successMsg = document.createElement("p");

successMsg.style.marginTop = "10px";
form.appendChild(successMsg);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;
  successMsg.textContent = "";
  [nameInput, emailInput, messageInput].forEach(input => {
    input.style.border = "1px solid #ccc";
  });

  if (nameInput.value.trim() === "") {
    nameInput.style.border = "1px solid red"; valid = false;
  }
  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    emailInput.style.border = "1px solid red"; valid = false;
  }
  if (messageInput.value.trim() === "") {
    messageInput.style.border = "1px solid red"; valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Thank you! Your message has been received.";
    successMsg.style.color = "green";
    form.reset();
  } else {
    successMsg.textContent = "❌ Please fill in all fields correctly.";
    successMsg.style.color = "red";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// ===== Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Default: dark theme
body.classList.add("dark-theme");

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.replace("light-theme", "dark-theme");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
