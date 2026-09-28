
type Point = {
    x : number;
    y : number;
}

function printCoOrdinates(pointData : Point) {
    console.log("x co-oridnate is ",pointData.x);
    console.log("y co-oridnate is ",pointData.y);
}

let pointInfo : Point = {
    x : 200,
    y : 200
}

printCoOrdinates(pointInfo)

