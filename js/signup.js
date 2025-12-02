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

const form = document.getElementById("sign-form");
document.getElementById("sign-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.querySelector("#username")?.value?.trim() || "User";
    const user = { username, role: selectedRole };
    localStorage.setItem("user", JSON.stringify(user));

    if (selectedRole === "volunteer") {
        window.location.href = "pages/volunteer/volunteerQuiz.html";
    } else {
        window.location.href = "pages/organizer/organizerQuiz.html";
    }
})