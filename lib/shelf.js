class Shelf {
    //8x6的矩阵
    constructor(items) {
        Shelf.prototype.db = items.slice();
        Shelf.prototype.size = items.length;
        this._init();
    }


    //draw the view of shelfs
    _init() {
        var cells = document.querySelectorAll('.cell');
        for(var i = 0; i < this.size; i++) {
            if(this.db[i]!==-1) {
                cells[i].innerHTML = this.db[i];
            } else {
                cells[i].innerHTML = "";
            }
        }
    }

    removeItemFromShelf(shelf, cell, col) {
        var index = (col-1)*16+(shelf-1)*4+cell-1;
        var item = this.db[index];
        this.db[index] = -1;
        this._init();
        return item;
    }

    addItemInShelf(item, shelf, cell, col) {
        var index = (col-1)*16+(shelf-1)*4+cell-1;
        console.log(item, shelf, cell, col, index,this.db);
        this.db[index] = item;
        this._init();
    }
}