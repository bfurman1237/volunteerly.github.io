const titleText = document.getElementById("title").innerHTML;
const selectedRole = titleText.split(" ")[0].toLowerCase();
const selectedRoleShort = selectedRole.slice(0, 3);

const form = document.getElementById("quiz-form");

const userInfo = localStorage.getItem("user");
const user = userInfo ? JSON.parse(userInfo) : null;

  // If no user in storage, redirect to sign up
if (!user) {
    window.location.href = "/signUp.html";
}

form.addEventListener("submit", function (e){
    e.preventDefault();
    window.location.href = `/pages/${selectedRole}/homepage${selectedRoleShort}.html`;

    const hobbies = form.querySelector("textarea")?.value || "";
    const monthly = form.querySelector('input[type="number"]')?.value || "";
    const updated = { ...user, quiz: { hobbies, monthly } };
    localStorage.setItem("user", JSON.stringify(updated));
});

// change logic for if its organizer for how you save the data

//  change the names so its easier to pull
