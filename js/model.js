import { apiKey } from "./config.js";
import { getJSON } from "./helpers.js";
import DOMElements from "./DOMElements.js";
// import View from "./view.js";

// export const loadAPI = async function () {
//   try {
//     const host = `https://api.frankfurter.app/latest`;
//     const data = await getJSON(`${host}`);

//     console.log(data);
//     console.log(data.rates);
//   } catch (err) {
//     console.log(`${err} - loading API err`);
//   }
// };

export const countingCurrencies = async function () {
  let value = DOMElements.inputValue.value;
  let curr1 = DOMElements.enterValueCurrency.value;
  let curr2 = DOMElements.resultValueCurrency.value;
  const host = `https://api.frankfurter.app/latest`;
  const data = await getJSON(
    `${host}?amount=${value}&from=${curr1}&to=${curr2}`
  );

  return data;
};

export const loadChart = async function () {
  try {
    const data = await getJSON(``);
  } catch (err) {
    console.log(`${err} - loading chart err`);
  }
};
export const lastSevenTable = async function () {
  try {
    const dataLastSeven = await getJSON(
      `http://api.nbp.pl/api/exchangerates/tables/c/last/7/`
    );

    return dataLastSeven;
  } catch (err) {
    console.log(`${err}`);
  }
};
export const loadTable = async function () {
  try {
    const data = await getJSON(`http://api.nbp.pl/api/exchangerates/tables/c/`);

    return data;
  } catch (err) {
    console.log(`${err} - loading table err`);
  }
};

export const loadCurrencies = async function () {
  try {
    const data = await getJSON(`https://api.frankfurter.app/currencies`);
    const entries = Object.entries(data);
    return entries;
  } catch (err) {
    console.log(`${err}`);
  }
};

loadTable();
