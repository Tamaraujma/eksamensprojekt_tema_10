document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".fordele_1-1-1 button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tekstBox = button.nextElementSibling;

      // Toggle visning af tekstboksen
      if (tekstBox.style.display === "flex") {
        tekstBox.style.display = "none";
        button.classList.remove("open");
      } else {
        tekstBox.style.display = "flex";
        button.classList.add("open");
      }
    });
  });
});
