let selectedRole = "volunteer";

const volunteerBtn = document.getElementById("volunteer-button");
const organizerBtn = document.getElementById("organizer-button");

volunteerBtn.addEventListener("click", () => {
    selectedRole = "volunteer";
    volunteerBtn.classList.add("selected");
    organizerBtn.classList.remove("selected");
});

organizerBtn.addEventListener("click", () => {
    selectedRole = "organizer";
    organizerBtn.classList.add("selected");
    volunteerBtn.classList.remove("selected");
});

document.getElementById("signup-form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (selectedRole === "volunteer") {
        window.location.href = "pages/volunteer/volunteerQuiz.html";
    } else {
        window.location.href = "pages/organizer/organizerQuiz.html";
    }
})