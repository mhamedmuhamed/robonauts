// Learn More button alert
const learnBtn = document.getElementById("learnBtn");
if (learnBtn) {
  learnBtn.addEventListener("click", () => {
    alert("Robonauts – towards the future of robotics!");
  });
}

// Contact form success notification (no email sending)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // show success message
    formStatus.textContent = "✅ Your message has been sent successfully!";

    // clear inputs
    contactForm.reset();

    // hide message after 4 seconds
    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
}
