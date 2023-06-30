const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("hidden");
    button.textContent = answer.classList.contains("hidden")
      ? "Показать ответ"
      : "Скрыть ответ";
  });
});
