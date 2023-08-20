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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("ca click");

  //   On cible la croix de fermeture de modal,
  // TODO au click la modal se ferme  (remove.eventlistener)
  const close = document.querySelector(".close");

  close.addEventListener("click", () => {
    modalbg.style.display = "none";
    console.log("ca ferme");
  });
}

// * ------------2nd CHANCE----------- **********************

const inputs = document.querySelectorAll(
  "input[type=text],input[type=email],input[type=date],input[type=number],input[type=radio],input[type=checkbox]"
);

const firstnameChecker = (value) => {
  const firstName = document.getElementById("first");
  if (value.length <= 1) {
    firstName.parentElement.classList.add("error");
    firstName.classList.add("error-input");
  } else {
    firstName.parentElement.classList.remove("error");
    firstName.classList.remove("error-input");
  }
};

const lastnameChecker = (value) => {
  console.log(value);
  const lastName = document.getElementById("last");
  if (value.length <= 1) {
    lastName.parentElement.classList.add("error");
    lastName.classList.add("error-input");
  } else {
    lastName.parentElement.classList.remove("error");
    lastName.classList.remove("error-input");
  }
};

const emailChecker = (value) => {
  const email = document.getElementById("email");
  console.log(value);
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.parentElement.classList.add("error");
    email.classList.add("error-input");
  } else {
    email.classList.remove("error-input");
    email.parentElement.classList.remove("error");
  }
};

const birthdateChecker = (value) => {
  console.log(value);
  const birthDate = document.getElementById("birthdate");

  if (value === "") {
    birthDate.classList.add("error-input");
    birthDate.parentElement.classList.add("error");
  } else {
    birthDate.classList.remove("error-input");
    birthDate.parentElement.classList.remove("error");
  }
};

const playChecker = (value) => {
  console.log(value);
  const quantity = document.getElementById("quantity");

  if (isNaN(value) || value < 0) {
    quantity.classList.add("error-input");
    quantity.parentElement.classList.add("error");
  } else {
    quantity.classList.remove("error-input");
    quantity.parentElement.classList.remove("error");
  }
};

const cityChecker = (value) => {
  console.log(value);
  const spanCity = document.querySelector(".span-city");

  if (value !== true) {
    spanCity.classList.add("error-input");
    spanCity.classList.add("error");
  } else {
    spanCity.classList.remove("error-input");
    spanCity.classList.remove("error");
  }
};

const cgvChecker = (value) => {
  const checkbox1 = document.getElementById("checkbox1");
  console.log(value);

  if (value === false) {
    checkbox1.classList.add("error-input");
    checkbox1.parentElement.classList.add("error");
  } else {
    checkbox1.classList.remove("error-input");
    checkbox1.parentElement.classList.remove("error");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e);
    // console.log(e.target.value);
    switch (e.target.id) {
      case "first":
        firstnameChecker(e.target.value);
        break;
      case "last":
        lastnameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        playChecker(e.target.value);
        break;
      case "location1":
      case "location2":
      case "location3":
      case "location4":
      case "location5":
      case "location6":
        cityChecker(e.isTrusted);
        break;
      case "checkbox1":
        cgvChecker(e.target.checked);
        break;
      default:
        null;
    }
  });
});

// Bouton qui permet de soumettre le formulaire. Affiche un message d'erreur si tous les champs ne sont pas valide
btnSubmit.addEventListener("click", (e) => {
  // Pour prevenir le comportement par défaut de l'input de type submit
  e.preventDefault();

  const modalBodySucced = document.querySelector(".modal-body-succed");

  modalBodySucced.classList.remove("disable");
});

const btnEnd = document.getElementById("btn-end");

// Boutton terminer qui permet de fermer la modal de confirmation d'inscription et de remttre le formulaire à zéro
btnEnd.addEventListener("click", () => {
  const modalBodySucced = document.querySelector(".modal-body-succed");
  const myForm = document.getElementById("myForm");

  modalbg.style.display = "none";
  modalBodySucced.classList.add("disable");
  myForm.reset();
});
