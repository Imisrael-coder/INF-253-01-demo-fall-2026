const registrationForm = document.getElementById("registration-form");

const confirmationMessage = document.getElementById("confirmation-message");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const program = document.getElementById("program");

    const selectedProgram = program.options[program.selectedIndex].text;

    confirmationMessage.textContent =
        "Thanks, " + name + "! You've requested a spot in the " + selectedProgram + ".";

});
