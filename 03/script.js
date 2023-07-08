const firstButton = document.querySelector("aside .buttons > :first-child");
const img = document.querySelector("aside .buttons > :first-child img");

const handleLoadingState = () => {
  const imgDisplay = img.style.display;
  const buttonCursor = firstButton.style.cursor;
  buttonCursor === "wait"
    ? (firstButton.style.cursor = "pointer")
    : (firstButton.style.cursor = "wait");
  imgDisplay === "block"
    ? (img.style.display = "none")
    : (img.style.display = "block");
};

firstButton.addEventListener("click", handleLoadingState);
