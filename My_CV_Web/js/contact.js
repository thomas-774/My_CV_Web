/* ============ CONTACT FORM ============
   Handles the contact form submission with Formspree via AJAX.
   Provides visual feedback during and after submission.
*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector(".btn-primary");
    const originalText = btn.textContent;

    // Show sending state
    btn.textContent = "Sending...";
    btn.style.opacity = "0.8";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show success state
        btn.textContent = "✓ Message Sent!";
        btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        btn.style.opacity = "1";
        form.reset();
      } else {
        // Show error state
        btn.textContent = "❌ Error Sending";
        btn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
        btn.style.opacity = "1";
      }
    } catch (error) {
      // Show error state on network failure
      btn.textContent = "❌ Error Sending";
      btn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      btn.style.opacity = "1";
    }

    // Reset button after 3 seconds
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      btn.style.opacity = "";
    }, 3000);
  });
}
