"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printCoOrdinates(pointData) {
    console.log("x co-oridnate is ", pointData.x);
    console.log("y co-oridnate is ", pointData.y);
    console.log("Method : ", pointData.getInfo(10));
}
let pointInfo = {
    x: 200,
    y: 200,
    getInfo(id) {
        return id + "";
    }
};
printCoOrdinates(pointInfo);
//# sourceMappingURL=typeAliases_3.js.map