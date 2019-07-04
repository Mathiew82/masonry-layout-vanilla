const fecthMasonry = (container:string, items:string, columns:number) => {
  const CONTAINER_EL = document.querySelector(`#${container}`);
  const WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;

  const ITEMS_ELS = document.querySelectorAll(`.${items}`);
  CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);

  const NEW_CONTAINER_EL = document.createElement('div');
  NEW_CONTAINER_EL.setAttribute('id', container);
  NEW_CONTAINER_EL.classList.add('masonry-layout', `columns-${columns}`);
  WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
  
  for (let i = 1; i <= columns; i++) {
    const COLUMN = document.createElement('div');
    COLUMN.classList.add(`masonry-column-${i}`);
    NEW_CONTAINER_EL.appendChild(COLUMN);
  }

  let countColumn = 1;

  ITEMS_ELS.forEach((item) => {
    let col = document.querySelector(`#${container} > .masonry-column-${countColumn}`);
    col.appendChild(item);
    countColumn = countColumn < columns ? countColumn + 1 : 1;
  });
}
