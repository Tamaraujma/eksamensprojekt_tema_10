const buttons = document.querySelectorAll('[class^="fordele-overskrift"]');

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const textBox = document.querySelector(`.fordele-tekst-${index + 1}`);
    const isVisible = textBox.style.display === "block";

    // Skjul alle andre
    document.querySelectorAll('[class^="fordele-tekst"]').forEach((box) => {
      box.style.display = "none";
    });

    // Toggle valgt
    textBox.style.display = isVisible ? "none" : "block";
  });
});
