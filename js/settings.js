let signOutButton = document.getElementById("sign-out-button");

document.addEventListener("DOMContentLoaded", () => {
    const signOutBtn = document.getElementById("sign-out-button");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", () => {
            localStorage.removeItem("user");
            window.location.href = "/index.html";
        });
    }

    const userRaw = localStorage.getItem("user");
    if (userRaw) {
        const user = JSON.parse(userRaw);
        document.querySelectorAll("[data-username]").forEach(element => {
            element.textContent = user.username;
        });
    }
});