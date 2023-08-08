function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-submit");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const radio1 = document.getElementById("location1");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("ca click");

  //   On cible la croix de fermeture de modal,
  // au click la modal se ferme
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    modalbg.style.display = "none";
    console.log("ca ferme");
  });
}

// Effet de validation lorsqu'on valide le formulaire et vérification étape par étape

btnSubmit.addEventListener("click", (e) => {
  // Pour prevenir le comportement par défaut de l'input de type submit
  e.preventDefault();

  if (firstName.value.length < 3) {
    firstName.parentElement.innerHTML += `<p  class="error"> Veuillez entrer 2 caractères ou plus.
    </p>`;
    console.log(firstName.value.length);
  } else if (lastName.value.length < 3) {
    lastError.innerText = "Veuillez entrer 2 caractères ou plus.";
    console.log(lastName.value.length);
  } else if (!email.value.match(/@/)) {
    alert("Adresse mail non valide");
  } else if (isNaN(birthdate.value) != true) {
    birthdate.parentElement.innerHTML += `<p  class="error">Vous devez entrer votre date de naissance.
    </p>`;
  } else if (isNaN(quantity.value)) {
    console.log("C'est PAS un Nombre");
    console.log(quantity.value);
  } else if (radio1.checked) {
    console.log("radio1 coché");
  } else if (!checkbox1.checked) {
    checkbox1.parentElement.innerHTML += `<p class="error"> Vous devez vérifier que vous acceptez les termes et conditions.
    </p>`;
  } else {
    document.querySelector(
      ".btn-submit"
    ).parentElement.innerHTML += `<p class="success"> Merci ! Votre réservation a été reçue.
    </p>`;
    console.log("TOUT EST BON");
  }
});
