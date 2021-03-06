class Robot {
    //@param new Robot(col_left, col_right [,position_shelf])
    constructor() {
        this.col_left = arguments[0];
        this.col_right = arguments[1];
        
        this.position = arguments[2]||1;
        this.load = "";
        this.load_state = "EMPTY";
        this.animate_state = "IDLE";

        var robot = document.createElement('div');
        robot.setAttribute('class','robot');
        robot.style.top = (this.position-1)*182+41+'px';
        robot.innerHTML = '<div class="storage"></div>';
        //这样写不能得不到序号为2的 null,因为先相同类型放一起然后再取一个类型下的第n个元素，如果第n个元素不匹配:前的条件，则返回null
        //var shelf = document.querySelector('body div.columns:nth-of-type(2)');
        var col = document.querySelectorAll('.columns');
        col[this.col_left-1].nextElementSibling.appendChild(robot);
        this.entity = robot;
    }

    _animation(target,direction) {
        var top = this.entity.offsetTop;
        //console.log(top,target,direction);
        if(direction) {
            top-=12;
        } else {
            top-=4;
        }
        //console.log(target);
        if((!direction && top>=target) || (direction && top<=target)) {
            this.animate_state = "IDLE";
            this.entity.style.top = target+'px';
            return;
        }
        var bindAnimation = this._animation.bind(this,target,direction);
        
        this.entity.style.top = top+'px';
        requestAnimationFrame(bindAnimation);
    }

    engageToWhere(shelf,cb) {
        this.animate_state = "ANIMATE";
        var diff = shelf-this.position;
        var targetY = this.entity.offsetTop+diff*182-8; //??
        var self = this;
        this._animation(targetY,diff>=0?0:1);
        function checkIfIdle() {
            if (self.animate_state==='ANIMATE') {
                setTimeout(checkIfIdle,0);
            } else {
                self.position = shelf;
                cb();
            }
        }
        checkIfIdle();
    }

    getItemFromShelf(cell, direction) { //0:left,1:right
        this.animate_state = "GETTING";
        this.load = Shelf.prototype.removeItemFromShelf(this.position, cell, direction>0? this.col_right:this.col_left);
        this.entity.firstChild.innerHTML = this.load;
        this.load_state = "LOADED";
    }

    placeItemOnShelf(cell, direction) {
        this.animate_state = "PUTTING";
        Shelf.prototype.addItemInShelf(this.load, this.position, cell, direction>0? this.col_right:this.col_left);
        this.load = "";
        this.entity.firstChild.innerHTML = "";
        this.load_state = "EMPTY";
    }

    processInstruction(instructions) {
        var self = this;

        function processNext(i) {
            if (i > instructions.length)
                return;
            var instruction = instructions[i];
            var placeOrget = instruction[1],
                shelf = instruction[0],
                cell = instruction[2],
                direction = instruction[3];
            console.log(self.entity.offsetTop);
            self.engageToWhere(shelf, function () {
                if (placeOrget)
                    self.placeItemOnShelf(cell, direction);
                else
                    self.getItemFromShelf(cell, direction);
                processNext(i + 1);
            });
        }

        processNext(0);
    }
}

