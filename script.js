const modeBtn = document.getElementById("modeBtn");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.innerText = "Thank you for contacting me!";
  });
}
