function switchAppearence() {
  const html = document.documentElement;
  const icon = document.querySelector("#appearence img");
  html.classList.toggle("dark");

  if (icon.getAttribute("src") === "./assets/darkmode.svg") {
    icon.setAttribute("src", "./assets/lightmode.svg");
  } else {
    icon.setAttribute("src", "./assets/darkmode.svg");
  }
}

function toggleListDisplay() {
  const list = document.getElementById("first-list");
  const list2 = document.getElementById("second-list");
  const dropdown = document.querySelector("#first-selector > :nth-child(3)");
  const dropdown2 = document.querySelector("#second-selector > :nth-child(3)");
  const currency = document.querySelector("#first-currency");
  const currency2 = document.querySelector("#second-currency");

  if (!list2.classList.contains("hidden")) {
    list2.classList.add("hidden");
    dropdown2.classList.remove("rotate");
    currency2.style.border = "var(--currency-border)";
  }

  list.classList.toggle("hidden");

  if (!list.classList.contains("hidden")) {
    dropdown.classList.add("rotate");
    currency.style.border = "1.5px solid #7C3AED";
  } else {
    dropdown.classList.remove("rotate");
    currency.style.border = "var(--currency-border)";
  }
}

function toggleListDisplay2() {
  const list = document.getElementById("first-list");
  const list2 = document.getElementById("second-list");
  const dropdown = document.querySelector("#first-selector > :nth-child(3)");
  const dropdown2 = document.querySelector("#second-selector > :nth-child(3)");
  const currency = document.querySelector("#first-currency");
  const currency2 = document.querySelector("#second-currency");

  if (!list.classList.contains("hidden")) {
    list.classList.add("hidden");
    dropdown.classList.remove("rotate");
    currency.style.border = "var(--currency-border)";
  }

  list2.classList.toggle("hidden");

  if (!list2.classList.contains("hidden")) {
    dropdown2.classList.add("rotate");
    currency2.style.border = "1.5px solid #7C3AED";
  } else {
    dropdown2.classList.remove("rotate");
    currency2.style.border = "var(--currency-border)";
  }
}
