document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card-wrapper");
  const cvv = document.getElementById("cvv");

  const rotate = () => {
    card.classList.toggle("rotate");
  };

  card.addEventListener("mousedown", rotate);
  card.addEventListener("mouseup", rotate);
  cvv.addEventListener("focus", rotate);
  cvv.addEventListener("blur", rotate);
});
