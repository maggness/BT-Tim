
if (window.location.href.indexOf("/resultate") > -1) {
} else {
var form = document.getElementById('formulier'); // form has to have ID: <form id="formulier">
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
  if (!event.target.checkValidity()) {
      event.preventDefault(); // dismiss the default functionality
      document.getElementById('validatortekst').innerText = "Je heb nog niet alles ingevuld of je hebt een te hoog nummer ingevoerd, check je antwoorden en probeer het opnieuw."
  }
}, false);


// input to track
var fieldnaam = document.getElementById("formulier");

if (sessionStorage.getItem("autosavefieldnaam")) {
    // Restore a content of the input
    fieldnaam.naamstudent.value = sessionStorage.getItem("autosavefieldnaam");
} if (sessionStorage.getItem("autosavefieldnummer")) {
  // Restore a content of the input
  fieldnaam.studentnummer.value = sessionStorage.getItem("autosavefieldnummer");
}

// Listen for changes in the input field
fieldnaam.addEventListener("change", function () {
  // save value into sessionStorage object 
  sessionStorage.setItem("autosavefieldnaam", fieldnaam.naamstudent.value);
  sessionStorage.setItem("autosavefieldnummer", fieldnaam.studentnummer.value);
});

console.log("Naam: "+sessionStorage.getItem("autosavefieldnaam"))
console.log("Nummer: "+sessionStorage.getItem("autosavefieldnummer"))


// var boxes = document.querySelectorAll('.fieldForm');

// for (const box of boxes) {
//   // box.classList.add('fieldClosed')
//   box.addEventListener('click', function handleClick() {
//     // box.classList.toggle('fieldClosed');
//     console.log(box);
//   });
// }

}