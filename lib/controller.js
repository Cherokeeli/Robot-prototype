class Controller {
    constructor() {
        this.robots = arguments[0];
        this.num_robots = this.robots.length;
    }

    getNearestRobotsFromCol(col) {
        return [this.getLeftRobotFromCol(col), this.getRightRobotFromCol(col)];
    }

    getLeftRobotFromCol(col) {
        var i = 0;
        for (i = 0; i < this.num_robots; i++) {
            if (this.robots[i].col_right === col)
                return this.robots[i];
        }
    }

    getRightRobotFromCol(col) {
        var i = 0;
        for (i = 0; i < this.num_robots; i++) {
            if (this.robots[i].col_left === col)
                return this.robots[i];
        }
    }

    //var instructions is a n*3 matrix [shelf, placeOrGet, cell, direction]


    moveItemToCell(item, col, shelf, cell) {
        var origin_index = Shelf.prototype.db.indexOf(item),
            target_index = (col - 1) * 16 + (shelf - 1) * 4 + cell - 1,
            origin_col = Math.ceil((origin_index + 1) / 16),
            target_col = Math.ceil((target_index + 1) / 16),
            origin_shelf = Shelf.prototype.getShelfViaIndex(origin_index),
            origin_cell = Shelf.prototype.getCellViaIndex(origin_index);
        console.log(origin_index,origin_col);
        var diff = Math.abs(origin_col - target_col);
        if (diff == 0) {
            var robots = this.getNearestRobotsFromCol(target_col);
            if (typeof (robots[0]) !== 'undefined') {
                robots[0].processInstruction([
                    [origin_shelf, 0, origin_cell,1],
                    [shelf, 1, cell, 1]
                ]);
            } else {
                robots[1].processInstruction([
                    [origin_shelf, 0, origin_cell,0],
                    [shelf, 1, cell, 0]
                ]);
            }
        } else if (diff == 1) {
            var robot_l = this.getNearestRobotsFromCol(origin_col),
                robot_r = this.getNearestRobotsFromCol(target_col);
            
        } else {

        }
    }
}