const buttons = document.querySelectorAll(".details-button");

const programMessage = document.getElementById("program-message");
const registerButton = document.getElementById("register-button");
const programSelect = document.getElementById("program");

let selectedProgram = "";

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.dataset.program === "book-club") {
            programMessage.textContent =
                "Community Book Club: Join other adults to discuss books, share ideas, and enjoy reading together.";

            selectedProgram = "book-club";
        }

        else if (button.dataset.program === "story-time") {
            programMessage.textContent =
                "Family Story Time: Families can enjoy stories, reading activities, and fun learning experiences for children.";

            selectedProgram = "story-time";
        }

        registerButton.hidden = false;

    });

});

registerButton.addEventListener("click", function() {
    programSelect.value = selectedProgram;
});