const emri = document.getElementById("emri");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("regjistrohu", (e) => {
  let messages = [];
  if (emri.value === "" || emri.value == null) {
    messages.push("Emri???");
  }

  if (password.value.length <= 7) {
    messages.push("Passwordi duhet te ket mbi 7 karaktere");
  }
  if (password.value.length >= 20) {
    messages.push("Passwordi duhet te ket me pak se 20 karaktere");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
  if (password.value === "111") {
    messages.push("Passwordi smund te jet 111");
  }
});
