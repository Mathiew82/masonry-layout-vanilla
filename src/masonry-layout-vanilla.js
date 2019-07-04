var fecthMasonry = function (container, items, columns) {
    var CONTAINER_EL = document.querySelector("#" + container);
    var WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;
    var ITEMS_ELS = document.querySelectorAll("." + items);
    CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);
    var NEW_CONTAINER_EL = document.createElement('div');
    NEW_CONTAINER_EL.setAttribute('id', container);
    NEW_CONTAINER_EL.classList.add('masonry-layout', "columns-" + columns);
    WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
    for (var i = 1; i <= columns; i++) {
        var COLUMN = document.createElement('div');
        COLUMN.classList.add("masonry-column-" + i);
        NEW_CONTAINER_EL.appendChild(COLUMN);
    }
    var countColumn = 1;
    ITEMS_ELS.forEach(function (item) {
        var col = document.querySelector("#" + container + " > .masonry-column-" + countColumn);
        col.appendChild(item);
        countColumn = countColumn < columns ? countColumn + 1 : 1;
    });
};
//# sourceMappingURL=masonry-layout-vanilla.js.map