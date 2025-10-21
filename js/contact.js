const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let isValid = true;
  successMsg.hidden = true;
  document.querySelectorAll(".error").forEach(el => (el.textContent = ""));

  // Full name validation
  if (name.value.trim() === "") {
    document.getElementById("error-name").textContent = "Full name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (email.value.trim() === "") {
    document.getElementById("error-email").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("error-email").textContent = "Enter a valid email (name@example.com).";
    isValid = false;
  }

  // Subject validation
  if (subject.value.trim() === "") {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  // Message validation
  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    form.reset();
    successMsg.hidden = false;
  }
});
