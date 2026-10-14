document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = "Submitted";
    submitButton.disabled = true;
    submitButton.style.opacity = "0.8";

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      submitButton.style.opacity = "1";
      alert("Application saved successfully. Please continue to document verification.");
    }, 900);
  });

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
