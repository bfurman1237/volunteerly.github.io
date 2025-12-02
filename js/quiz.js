const titleText = document.getElementById("title").innerHTML;
const selectedRole = titleText.split(" ")[0].toLowerCase();
const selectedRoleShort = selectedRole.slice(0, 3);

const form = document.getElementById("quiz-form");

form.addEventListener("submit", function (e){
    e.preventDefault();
    window.location.href = `/pages/${selectedRole}/homepage${selectedRoleShort}.html`;
});