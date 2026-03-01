const form = document.getElementById("form");
const msg = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name || !email) {
    msg.textContent = "Molim popunite sva polja!";
    msg.style.color = "red";
    return;
  }

  localStorage.setItem("kontaktName", name);
  localStorage.setItem("kontaktEmail", email);

  msg.textContent = "Vaši podaci su spremljeni!";
  msg.style.color = "green";
});