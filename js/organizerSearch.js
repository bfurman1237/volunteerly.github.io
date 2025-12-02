const searchEnter = document.getElementById("search-enter");
if (searchEnter) {
    searchEnter.addEventListener("click", () => {
        const input = document.getElementById("applicant");
        const query = input?.value?.trim() || "";
        window.location.href = `/pages/searchPart2.html?q=${encodeURIComponent(query)}`;
    });
    // only works if we implement different pages for a bout and stuff
}