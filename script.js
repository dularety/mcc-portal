document.addEventListener("DOMContentLoaded", () => {
  // Existing registration form behavior (left from original project)
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const submitButton = regForm.querySelector('button[type="submit"]');
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
  }

  // Page navigation visuals
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // New: login form behaviour on redesigned page
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = loginForm.querySelector('button[type="submit"]');
      btn.textContent = "Logging in...";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Login";
        btn.disabled = false;
        alert("This is a mock login — credentials aren’t sent. Replace with real auth to enable.");
      }, 800);
    });

    const refreshBtn = document.getElementById("refreshCaptcha");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        // In a real implementation this would fetch a fresh captcha image from server.
        // For the mock: briefly animate the image element to indicate refresh.
        const img = refreshBtn.parentElement.querySelector('img');
        img.style.opacity = 0.6;
        setTimeout(() => (img.style.opacity = 1), 300);
      });
    }

    const forgotBtn = document.getElementById("forgot");
    if (forgotBtn) {
      forgotBtn.addEventListener("click", () => {
        alert('Password reset flow is not implemented in this mock.');
      });
    }
  }
});
