const calc = document.querySelector(".calc > span");
const result = document.querySelector(".result > span");

const buttonsNodeList = document.querySelectorAll(".keyboard span");

const allButtons = [...buttonsNodeList];

const numButtons = allButtons.filter(
  (btn) =>
    !btn.innerHTML.includes("img") &&
    !btn.innerHTML.includes("C") &&
    !btn.innerHTML.includes(",")
);

const ce = document.querySelector(".ce ");
const clear = document.querySelector(".clear ");

const percent = document.querySelector(".percent  ");
const comma = document.querySelector(".comma ");

const divide = document.querySelector(".divide ");
const multiply = document.querySelector(".multiply ");
const minus = document.querySelector(".minus ");
const plus = document.querySelector(".plus ");

const operationButtons = [divide, multiply, minus, plus];

const equals = document.querySelector(".equals");

let calcStr = "";
let resultStr = "";

let num1 = null;
let num2 = null;

let operator = "";

const clearAll = () => {
  calcStr = "";
  resultStr = "";

  calc.innerHTML = calcStr;
  result.innerHTML = resultStr;
};

ce.addEventListener("click", clearAll);

const clearLast = () => {
  resultStr = resultStr.slice(0, resultStr.length - 1);
  result.innerHTML = resultStr;
};

clear.addEventListener("click", clearLast);

const insertValue = (e) => {
  if (resultStr.length < 10) {
    result.setAttribute("style", "font-size: 3.6rem");
    resultStr += e.target.innerHTML;
    result.innerHTML = resultStr;
  }
};

numButtons.forEach((btn) => btn.addEventListener("click", insertValue));

const getOperator = (e) => {
  switch (e.target.classList.value) {
    case "divide":
      operator = "/";
      break;
    case "multiply":
      operator = "x";
      break;
    case "minus":
      operator = "-";
      break;
    default:
      operator = "+";
  }
  num1 = Number(resultStr);

  resultStr = "";
  result.innerHTML = resultStr;

  calc.innerHTML = num1 + ` ${operator} `;
};

operationButtons.forEach((btn) => btn.addEventListener("click", getOperator));

const operation = () => {
  let operationResult = 0;
  if (num1 !== null) {
    num2 = Number(resultStr);
  }
  switch (operator) {
    case "/":
      operationResult = num1 / num2;
      break;
    case "x":
      operationResult = num1 * num2;
      break;
    case "-":
      operationResult = num1 - num2;
      break;
    default:
      operationResult = num1 + num2;
  }

  if (String(operationResult).length > 10) {
    result.setAttribute("style", "font-size: 2rem");
  }

  calc.innerHTML = `${num1} ${operator} ${num2}`;
  result.innerHTML = operationResult;

  calcStr = "";
  resultStr = "";

  num1 = null;
  num2 = null;

  operator = "";
};

equals.addEventListener("click", operation);

const percentFunction = () => {
  if (resultStr !== "") {
    num1 = Number(resultStr);
    const percentResult = num1 / 100;

    calc.innerHTML = `${num1} %`;
    result.innerHTML = percentResult;

    num1 = null;
  }
};

percent.addEventListener("click", percentFunction);

const commaFunction = () => {
  resultStr += ".";
  result.innerHTML = resultStr;
};

comma.addEventListener("click", commaFunction);
