document.addEventListener("DOMContentLoaded", function () {
  // CONSTANTES
  const top = document.getElementById("top");
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll("button");

  // FUNÇÕES
  const clear = () => {
    [top, result].forEach((e) => {
      e.innerHTML = "";
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", clear);
  });

  document.querySelector("#ce").addEventListener("click", clear);
});
