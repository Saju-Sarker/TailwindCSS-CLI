const toggleBtn = document.querySelector("#toggle");
const htmlM = document.querySelector("html");


window.addEventListener("load", () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    toggleBtn.checked = isDarkMode;
    if (isDarkMode) {
        htmlM.classList.add("dark");
    }
});


toggleBtn.addEventListener("change", () => {
    if (toggleBtn.checked) {
        htmlM.classList.add("dark");
        localStorage.setItem("darkMode", "true");
    } else {
        htmlM.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
    }
});
