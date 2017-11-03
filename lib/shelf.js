class Shelf {
    //8x6的矩阵
    constructor(items) {
        this.db = items.slice();
        this.size = items.length;
        this._init();
    }

    _init(items) {
        var cells = document.querySelectorAll('.cell');
        for(var i = 0; i < this.size; i++) {
            cells[i].innerHTML = this.db[i];
        }
    }

    removeItemFromShelf(shelf, cell, col) {
        var index = (col-1)*16+(shelf-1)*4+cell-1;
        var item = this.db[index];
        this.db[index] = "";
        this._init();
        return item;
    }

    addItemInShelf() {
        this._init();
    }
}