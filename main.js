var temp = Object.keys(Array.apply(null,{length:48}));
var shelf = new Shelf(temp);

var robot1 = new Robot(1,2);
var robot2 = new Robot(2,3);
robot2.engageToWhere(4,function() {
    robot2.getItemFromShelf(shelf,1,1);
    robot2.engageToWhere(1,function() {
        robot2.getItemFromShelf(shelf,1,1);
    });
});
robot1.engageToWhere(2,function() {
    robot1.getItemFromShelf(shelf,3,0);
});
