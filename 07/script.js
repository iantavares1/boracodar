const inputName = document.querySelector("header .search > .input-wrapper");
const inputCity = document.querySelector(
  "header .search .input-wrapper + .input-wrapper"
);
const selectCity = document.querySelector("header .select-city");
const cityOption = document.querySelectorAll("header .select-city option");
const dropdown = document.querySelector("header button img");

const mapButton = document.querySelector("main .top .buttons-wrapper .map");
const listButton = document.querySelector("main .top .buttons-wrapper .list");
const topH1 = document.querySelector("main .top h1");
const content = document.querySelector("main .content");

const cardInfo = {
  1: {
    id: 1,
    title: "O Python do vovô não sobe mais",
    city: "São Paulo - SP",
  },
  2: {
    id: 2,
    title: "Todo mundo null",
    city: "Florianópolis - SC",
  },
  3: {
    id: 3,
    title: "Hoje dou exception",
    city: "Curitiba - PR",
  },
  4: {
    id: 4,
    title: "Manda Node",
    city: "Salvador - BA",
  },
  5: {
    id: 5,
    title: "Só no back-end",
    city: "São Paulo - SP",
  },
  6: {
    id: 6,
    title: "Esse anel não é de Ruby",
    city: "São Paulo - SP",
  },
  7: {
    id: 7,
    title: "Pimenta no C# dos outros é refresco",
    city: "Rio de Janeiro - RJ",
  },
  8: {
    id: 8,
    title: "EnCACHE aqui",
    city: "Porto Alegre - RS",
  },
  9: {
    id: 9,
    title: "Não valho nada mas JAVA li",
    city: "São Paulo - SP",
  },
};

const toggleButtonClass = (button1, button2) => {
  button1.classList.remove("isnotactive");
  button1.classList.add("purple-button");
  button2.classList.remove("purple-button");
  button2.classList.add("isnotactive");
};

const createCard = (id, title, description, city) => {
  const imgSrc = `./assets/png/${id}.png`;
  const defaultDescription =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.";
  description = description || defaultDescription;

  const card = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const h2 = document.createElement("h2");
  const spanDescriptionWrapper = document.createElement("span");
  const spanCityWrapper = document.createElement("span");
  const spanCity = document.createElement("span");
  const locationIcon = document.createElement("img");

  img.src = imgSrc;
  img.alt = "imagem de carnaval";
  h2.textContent = title;
  spanDescriptionWrapper.textContent = description;
  spanCity.textContent = city;
  locationIcon.src = "./assets/svg/locationIcon.svg";
  locationIcon.alt = "svg";

  card.classList.add("card");
  info.classList.add("info");

  card.append(img, info);
  info.append(h2, spanDescriptionWrapper, spanCityWrapper);
  spanCityWrapper.append(locationIcon, spanCity);

  return card;
};

const createMapImage = () => {
  const img = document.createElement("img");
  img.src = "./assets/png/brazil.png";
  img.alt = "mapa do Brasil";
  img.classList.add("map");

  return img;
};

const getCardsByName = (value) => {
  if (value === "") return Object.values(cardInfo);
  return Object.values(cardInfo).filter((card) =>
    card.title.toLowerCase().includes(value.toLowerCase())
  );
};

const getCardsByCity = (value) =>
  Object.values(cardInfo).filter((card) => card.city === value);

const handleShowSelect = () => {
  inputCity.placeholder = "";
  selectCity.style.display =
    selectCity.style.display === "none" ? "flex" : "none";
  dropdown.style.transform =
    selectCity.style.display === "none" ? "rotate(0deg)" : "rotate(180deg)";
};

const handleShowContent = (page, array) => {
  topH1.innerHTML = "";
  content.innerHTML = "";
  if (page === "list") {
    toggleButtonClass(listButton, mapButton);
    topH1.textContent = "Blocos recomendados";
    content.style.display = "grid";

    const cards = array
      ? array.map((card) => createCard(card.id, card.title, "", card.city))
      : Object.values(cardInfo).map((card) =>
          createCard(card.id, card.title, "", card.city)
        );
    content.append(...cards);
  } else {
    toggleButtonClass(mapButton, listButton);
    topH1.textContent = "Mapa";
    content.style.display = "flex";
    content.style.justifyContent = "center";

    const img = createMapImage();
    content.append(img);
  }
};

handleShowContent("list", Object.values(cardInfo));

inputName.addEventListener("input", (e) =>
  handleShowContent("list", getCardsByName(e.target.value))
);

cityOption.forEach((option) =>
  option.addEventListener("click", (e) =>
    handleShowContent("list", getCardsByCity(e.target.value))
  )
);

mapButton.addEventListener("click", () => handleShowContent("map"));
listButton.addEventListener("click", () => handleShowContent("list"));
inputCity.addEventListener("click", handleShowSelect);
