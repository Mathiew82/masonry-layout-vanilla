const fecthMasonry = (container, items, columns) => {
  let containerElement = document.querySelector(`#${container}`);
  let wrapperContainerElement = containerElement.parentNode;

  const ITEMS_ELEMENTS = Array.from(document.querySelectorAll(`.${items}`));
  containerElement.parentNode.removeChild(containerElement);

  const newContainerElement = document.createElement('div');
  newContainerElement.setAttribute('id', container);
  newContainerElement.classList.add('masonry-layout', `columns-${columns}`);
  wrapperContainerElement.appendChild(newContainerElement);
  
  for (let i = 1; i <= columns; i++) {
    const COLUMN = document.createElement('div');
    COLUMN.classList.add(`masonry-column-${i}`);
    newContainerElement.appendChild(COLUMN);
  }

  let countColumn = 1;

  ITEMS_ELEMENTS.forEach((item, index) => {
    let col = document.querySelector(`.masonry-column-${countColumn}`);
    col.appendChild(item);
    countColumn = countColumn < columns ? countColumn + 1 : 1;
  });
}
