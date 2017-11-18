const items_number = 48;

//var shelf = new Shelf(Object.keys(Array.apply(null,{length:items_number})));
var temp = [];
for(var i = 0; i < 48; i++) {
    temp[i] = i;
    if(i>=8 && i<=15) {
        temp[i] = -1;
    }

    if(i>=24 && i<=31) {
        temp[i] = -1;
    }

    if(i > 31)
        temp[i] = -1;
}

var shelf = new Shelf(temp);

var robot1 = new Robot(1,2,2);
var robot2 = new Robot(2,3);

// robot1.engageToWhere(2,function() {
//     robot1.getItemFromShelf(1,0);
//     robot1.engageToWhere(3,function() {
//         robot1.placeItemOnShelf(1,1);
//         robot1.engageToWhere(2,function() {
//             robot1.getItemFromShelf(2,0);
//             robot1.engageToWhere(3,function() {
//                 robot1.placeItemOnShelf(2,1);
//                 robot1.engageToWhere(2,function() {
//                     robot1.getItemFromShelf(3,0);
//                     robot1.engageToWhere(3,function() {
//                         robot1.placeItemOnShelf(3,1);
//                         robot1.engageToWhere(2,function() {
//                             robot1.getItemFromShelf(4,0);
//                             robot1.engageToWhere(3,function() {
//                                 robot1.placeItemOnShelf(4,1);
//                                  //第二次
//                                 robot1.engageToWhere(1,function() {
//                                     robot1.getItemFromShelf(1,0);
//                                     robot1.engageToWhere(4,function() {
//                                         robot1.placeItemOnShelf(1,1);
//                                         robot1.engageToWhere(1,function() {
//                                             robot1.getItemFromShelf(2,0);
//                                             robot1.engageToWhere(4,function() {
//                                                 robot1.placeItemOnShelf(2,1);
//                                                 robot1.engageToWhere(1,function() {
//                                                     robot1.getItemFromShelf(3,0);
//                                                     robot1.engageToWhere(4,function() {
//                                                         robot1.placeItemOnShelf(3,1);
//                                                         robot1.engageToWhere(1,function() {
//                                                             robot1.getItemFromShelf(4,0);
//                                                             robot1.engageToWhere(4,function() {
//                                                                 robot1.placeItemOnShelf(4,1);
//                                                                 robot2.engageToWhere(4,function() {
//                                                                     robot2.getItemFromShelf(4,0);
//                                                                     robot2.engageToWhere(2,function() {
//                                                                         robot2.placeItemOnShelf(4,1);
//                                                                     });
//                                                                 });
//                                                             });
//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

var controller1 = new Controller(robot1);
var instruct1 = [
    [2,0,1,0],
    [3,1,1,1],
    [2,0,2,0],
    [3,1,2,1],
    [2,0,3,0],
    [3,1,3,1],
    [2,0,4,0],
    [3,1,4,1],
    [1,0,1,0],
    [4,1,1,1],
    [1,0,2,0],
    [4,1,2,1],
    [1,0,3,0],
    [4,1,3,1],
    [1,0,4,0],
    [4,1,4,1]
];
controller1.processInstruction(instruct1);


// robot2.engageToWhere(3,function() {
//     robot2.getItemFromShelf(1,0);
//     robot2.engageToWhere(1,function() {
//         robot2.placeItemOnShelf(1,1);
//         robot2.engageToWhere(3,function() {
//             robot2.getItemFromShelf(2,0);
//             robot2.engageToWhere(1,function() {
//                 robot2.placeItemOnShelf(2,1);
//                 robot2.engageToWhere(3,function() {
//                     robot2.getItemFromShelf(3,0);
//                     robot2.engageToWhere(1,function() {
//                         robot2.placeItemOnShelf(3,1);
//                         robot2.engageToWhere(3,function() {
//                             robot2.getItemFromShelf(4,0);
//                             robot2.engageToWhere(1,function() {
//                                 robot2.placeItemOnShelf(4,1);
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });


var controller2 = new Controller(robot2);
var instruct2 = [
    [3,0,1,0],
    [1,1,1,1],
    [3,0,2,0],
    [1,1,2,1],
    [3,0,3,0],
    [1,1,3,1],
    [3,0,4,0],
    [1,1,4,1]];
// var instruct2 = [
//     [1,0,1,0],
//     [4,1,1,0],
//     [4,0,1,0],
//     [1,0,1,0]
// ];
controller2.processInstruction(instruct2);
