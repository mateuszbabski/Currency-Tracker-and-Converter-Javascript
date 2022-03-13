import DOMElements from "./DOMElements.js";

export const showConvertedValue = (value, rate) => {
  DOMElements.resultValue.value = value.toFixed(2);

  DOMElements.ratio.insertAdjacentHTML(
    "afterbegin",
    `<p class="exchange-ratio">rate: ${rate.toFixed(3)}</p>`
  );
};

export const reverseCurrencies = () => {
  let tempVariable = DOMElements.enterValueCurrency.value;
  DOMElements.enterValueCurrency.value = DOMElements.resultValueCurrency.value;
  DOMElements.resultValueCurrency.value = tempVariable;
};

export const showChart = () => {};

export const showDate = () => {
  let today = new Date();
  let day = today.toUTCString().slice(0, 22);
  const markup = `<p class="full-date">${day}</p>`;

  DOMElements.dayPlace.insertAdjacentHTML("afterbegin", markup);
};
