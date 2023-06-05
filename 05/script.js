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

const ce = document.querySelector(".ce");
const clear = document.querySelector(".clear");
const comma = document.querySelector(".comma");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const percent = document.querySelector(".percent ");
const plus = document.querySelector(".plus");
const toggleSignal = document.querySelector(".toggle-signal");

let calcStr = "";
let resultStr = "";
let num1 = null;
let num2 = null;
let operator = "";

const updateCalc = () => (calc.innerHTML = calcStr);
const updateResult = () => (result.innerHTML = resultStr);

const clearAll = () => {
  calcStr = "";
  resultStr = "";
  operator = "";
  num1 = null;
  num2 = null;
  updateCalc();
  updateResult();
};

const clearLast = () => {
  resultStr = resultStr.slice(0, resultStr.length - 1);
  updateResult();
};

const insertValue = (e) => {
  if (resultStr.length < 10) {
    result.setAttribute("style", "font-size: 3.6rem");
    resultStr += e.target.innerHTML;
    updateResult();
  }
};

const getOperator = (value) => {
  operator = value;
  if (calc.innerHTML.includes("%")) {
    num1 = Number(num1);
  } else {
    num1 = Number(resultStr);
  }
  calcStr = num1 + ` ${operator} `;
  updateCalc();
  resultStr = "";
  updateResult();
};

const operation = () => {
  let operationResult = 0;
  if (num1 !== null) {
    num2 = Number(resultStr);
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
    calcStr = `${num1} ${operator} ${num2}`;
    updateCalc();
    resultStr = operationResult;
    updateResult();
  }
  calcStr = "";
  resultStr = "";
  num1 = null;
  num2 = null;
  operator = "";
};

const toggleSignalFn = () => {
  if (resultStr !== "") {
    if (resultStr.startsWith("-")) {
      resultStr = resultStr.slice(1);
    } else {
      resultStr = `-${resultStr}`;
    }
  }
  updateResult();
};

const percentFn = () => {
  if (resultStr !== "") {
    resultStr.includes(",") && resultStr.replace(",", ".");
    num1 = Number(resultStr);
    const percentResult = num1 / 100;
    num1 = percentResult;
    calcStr = `${num1} %`;
    updateCalc();
    resultStr = num1;
    updateResult();
  }
};

const commaFn = () => {
  resultStr += ".";
  updateResult();
};

ce.addEventListener("click", clearAll);
clear.addEventListener("click", clearLast);
comma.addEventListener("click", commaFn);
numButtons.forEach((btn) => btn.addEventListener("click", insertValue));
divide.addEventListener("click", () => getOperator("/"));
multiply.addEventListener("click", () => getOperator("x"));
minus.addEventListener("click", () => getOperator("-"));
plus.addEventListener("click", () => getOperator("+"));
equals.addEventListener("click", operation);
percent.addEventListener("click", percentFn);
toggleSignal.addEventListener("click", toggleSignalFn);
