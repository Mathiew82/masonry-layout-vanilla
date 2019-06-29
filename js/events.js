/* Events JS */
window.onload = () => {
  document.querySelector('#loading').style.display = 'none';
}

const COLUMNS_SELECT = document.querySelector('#columns-select');
COLUMNS_SELECT.onchange = (event) => {
  fecthMasonry(event.target.dataset.selectorId, event.target.dataset.selectorClass, event.target.value);
}