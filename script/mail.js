emailjs.init({
   publicKey: "JBfUEBM_mhkCHN_z_",
});

document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("contact-form");

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      emailjs
         .send("service_udot2sh", "template_oc7pbrx", {
            name: name,
            message: message,
            email: email,
         })
         .then((response) =>
            console.log("Письмо успешно отправлено!", response)
         )
         .catch((error) => console.log("Возникла ошибка...", error));
   });
});
