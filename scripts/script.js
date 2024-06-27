document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkmodeBtn");

  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
});
