// var form = document.getElementById('formulier'); // form has to have ID: <form id="formID">
// form.noValidate = true;
// form.addEventListener('submit', function (event) { // listen for form submitting
//     if (!event.target.checkValidity()) {
//         event.preventDefault(); // dismiss the default functionality
//     }
// }, false);


// input to track
var fieldnaam = document.getElementById("formulier");

if (sessionStorage.getItem("autosavefieldnaam")) {
    // Restore a content of the input
    fieldnaam.naamstudent.value = sessionStorage.getItem("autosavefieldnaam");
} if (sessionStorage.getItem("autosavefieldnummer")) {
  // Restore a content of the input
  fieldnaam.studentnummer.value = sessionStorage.getItem("autosavefieldnummer");
} if (sessionStorage.getItem("autosavefieldnummer")) {
  // Restore a content of the input
  fieldnaam.docent.value = sessionStorage.getItem("autosavefieldselectiondocent");
}

// Listen for changes in the input field
fieldnaam.addEventListener("change", function () {
  // save value into sessionStorage object 
  sessionStorage.setItem("autosavefieldnaam", fieldnaam.naamstudent.value);
  sessionStorage.setItem("autosavefieldnummer", fieldnaam.studentnummer.value);
});

console.log("Naam: "+sessionStorage.getItem("autosavefieldnaam"))
console.log("Nummer: "+sessionStorage.getItem("autosavefieldnummer"))
