class Controller {
    constructor() {
        this.robot = arguments[0];
    }

    //var instructions is a n*3 matrix [shelf, placeOrGet, direction, cell]
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
            console.log(self.robot.entity.offsetTop);
            self.robot.engageToWhere(shelf, function () {
                if (placeOrget)
                    self.robot.placeItemOnShelf(cell, direction);
                else
                    self.robot.getItemFromShelf(cell, direction);
                processNext(i + 1);
            });
        }

        processNext(0);
    }
}