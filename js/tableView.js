import DOMElements from './DOMElements.js';

export const showRatingTable = (update, data, dataLastSeven) => {
  const updateTime = document.querySelector('.currencies-table');
  const markup = `<p class="update-time">Effective day: ${update}</p>`;
  updateTime.insertAdjacentHTML('afterbegin', markup);

  for (let i = 0; i < data[0].rates.length; i++) {
    let avPrice = (data[0].rates[i].bid + data[0].rates[i].ask) / 2;
    let avPriceSeven =
      (dataLastSeven[0].rates[i].bid + dataLastSeven[0].rates[i].ask) / 2;
    let percentage = (avPrice / avPriceSeven) * 100 - 100;

    let markup = `<tr class="currency-rate">
<td class="currency-column"><img src="../flags/${
      data[0].rates[i].code
    }.png" alt="Flag" width="20px">
        
</img> ${data[0].rates[i].code}</td>
<td>${data[0].rates[i].bid.toFixed(3)}</td>
<td>${data[0].rates[i].ask.toFixed(3)}</td>
<td>${avPrice.toFixed(3)}</td>
<td><span class="percent">${percentage.toFixed(3)}%</span></td>
</tr>`;

    DOMElements.currencyTable.insertAdjacentHTML('beforeend', markup);
  }
};
