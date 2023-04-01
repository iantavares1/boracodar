document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card-wrapper");
  const cvv = document.getElementById("cvv");

  const rotate = () => {
    card.classList.toggle("rotate");
  };

  cvv.addEventListener("focus", rotate);
  cvv.addEventListener("blur", rotate);
});
