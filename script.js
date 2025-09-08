const form = document.getElementById("quizForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = form.name.value;
  let email = form.email.value;
  let phone = form.phone.value;
  let handle = form.handle.value;

  // Your WhatsApp number (Nigeria format, no "+")
  let whatsappNumber = "2349060814505";

  let message = `📋 Quiz Application\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🎥 Handle: ${handle}`;

  let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp with pre-filled message
  window.open(url, "_blank");

  // Optional: also show success message inside app
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
});
