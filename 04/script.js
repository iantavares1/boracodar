const main = document.querySelector("main");
const input = document.querySelector(".input-wrapper input");
const send = document.querySelector(".input-wrapper .send");
const close = document.querySelector("header > button");

const clear = (element) => {
  element.value = "";
  element.innerHTML = "";
};

const handleCreateMessage = () => {
  const inputValue = input.value;
  clear(input);

  const currentTime = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });

  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message-wrapper");
  messageWrapper.classList.add("right");

  const timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = `Você - ${currentTime}`;

  const messageSpan = document.createElement("span");
  messageSpan.classList.add("message");
  messageSpan.innerHTML = inputValue;

  messageWrapper.appendChild(timeSpan);
  messageWrapper.appendChild(messageSpan);

  main.appendChild(messageWrapper);

  main.scrollTo(0, main.scrollHeight);
};

send.addEventListener("click", handleCreateMessage);
close.addEventListener("click", () => {
  clear(main);
  clear(input);
});
