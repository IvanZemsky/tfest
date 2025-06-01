emailjs.init({
   publicKey: "JBfUEBM_mhkCHN_z_",
});

document.addEventListener("DOMContentLoaded", () => {
   const errors = {
      email: null,
      name: null,
      message: null,
   };

   const form = document.getElementById("contact-form");

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const messageInput = document.querySelector('textarea[name="message"]');

      const submitBtn = document.getElementById("submit-btn");

      const nameErr = document.getElementById("name-error");
      const emailErr = document.getElementById("email-error");
      const messageErr = document.getElementById("message-error");

      const formSuccess = document.getElementById("form-success");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name) {
         errors.name = "Введите имя";
         nameInput.classList.add("input-error");
         nameErr.textContent = errors.name;
      } else {
         errors.name = null;
         nameInput.classList.remove("input-error");
         nameErr.textContent = errors.name;
      }

      if (!email) {
         errors.email = "Введите email";
         emailInput.classList.add("input-error");
         emailErr.textContent = errors.email;
      } else {
         errors.email = null;
         emailInput.classList.remove("input-error");
         emailErr.textContent = errors.email;
      }

      if (!message) {
         errors.message = "Введите сообщение - до 300 символов";
         messageInput.classList.add("input-error");
         messageErr.textContent = errors.message;
      } else {
         errors.message = null;
         messageInput.classList.remove("input-error");
         messageErr.textContent = errors.message;
      }

      if (errors.email || errors.name || errors.message) {
         formSuccess.textContent = "";
         return
      }

      submitBtn.disabled = true;

      emailjs
         .send("service_udot2sh", "template_oc7pbrx", {
            name: name,
            message: message,
            email: email,
         })
         .then((response) =>
            console.log("Письмо успешно отправлено!", response)
         )
         .then(() => {
            form.reset();
            formSuccess.textContent = "Ваше сообщение отправлено";
            submitBtn.disabled = false;
         })
         .catch((error) => {
             console.log("Возникла ошибка...", error)
             submitBtn.disabled = false;
         });
   });
});
