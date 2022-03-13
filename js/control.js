import DOMElements from './DOMElements.js';
import {
  showConvertedValue,
  reverseCurrencies,
  showDate,
  showChart,
} from './view.js';
import {
  loadCurrencies,
  countingCurrencies,
  loadTable,
  lastSevenTable,
} from './model.js';
import { showRatingTable } from './tableView.js';

const loadingCurrencies = async function () {
  const data = await loadCurrencies();

  for (let i = 0; i < data.length; i++) {
    let countryList = `<option value="${data[i][0]}" class="option curr1">${data[i][0]}</option>`;
    let countryList2 = `<option value="${data[i][0]}" class="option curr2">${data[i][0]}</option>`;
    DOMElements.enterValueCurrency.insertAdjacentHTML(
      'afterbegin',
      countryList
    );
    DOMElements.resultValueCurrency.insertAdjacentHTML(
      'afterbegin',
      countryList2
    );
  }
};

const convertValue = async function () {
  const data = await countingCurrencies();

  let value = Object.entries(data.rates)[0][1];
  let rate = value / data.amount;
  DOMElements.ratio.innerHTML = '';
  await showConvertedValue(value, rate);
};

const loadingRatingTable = async function () {
  const data = await loadTable();
  const update = data[0].effectiveDate;
  const lastSevenData = await lastSevenTable();
  // console.log(data);
  // console.log(lastSevenData);

  await showRatingTable(update, data, lastSevenData);
};

const init = () => {
  showDate();
  loadingCurrencies();
  loadingRatingTable();

  DOMElements.inputValue.value = '';
  DOMElements.resultValue.value = '';
};
init();

DOMElements.countValue.addEventListener('click', convertValue);
DOMElements.reverseCurrency.addEventListener('click', reverseCurrencies);
// DOMElements.showChart.addEventListener("click", showChart);
