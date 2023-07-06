const spinButton = document.querySelector(".sofa button#spin-button");
const spinIcon = document.querySelector(".sofa button#spin-button img");
const sofaImg = document.querySelector(".sofa > #sofa-img");

const switchImageVisibility = () => {
  const sofaImgSrc = sofaImg.getAttribute("src");
  const spinIconSrc = spinIcon.getAttribute("src");
  sofaImgSrc.includes(".png")
    ? sofaImg.setAttribute("src", sofaImgSrc.replace(".png", ".gif"))
    : sofaImg.setAttribute("src", sofaImgSrc.replace(".gif", ".png"));
  spinIconSrc.includes("360")
    ? spinIcon.setAttribute("src", spinIconSrc.replace("360", "close"))
    : spinIcon.setAttribute("src", spinIconSrc.replace("close", "360"));
};

spinButton.addEventListener("click", switchImageVisibility);
