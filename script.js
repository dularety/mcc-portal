document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const submitButton = loginForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = "Logging in...";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        alert("This is a demo login. Use the New Registration page to submit a real registration record.");
      }, 700);
    });
  }

  const refreshCaptcha = document.getElementById("refreshCaptcha");
  if (refreshCaptcha) {
    refreshCaptcha.addEventListener("click", () => {
      const captchaText = document.querySelector(".captcha-text");
      if (!captchaText) return;

      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      captchaText.textContent = String(randomNumber);
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
