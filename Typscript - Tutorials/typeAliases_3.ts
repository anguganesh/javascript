
type Point = {
    x : number;
    y : number;

    getInfo : (id ?: number) => string;
}

function printCoOrdinates(pointData : Point) {
    console.log("x co-oridnate is ",pointData.x);
    console.log("y co-oridnate is ",pointData.y);
    console.log("Method : ", pointData.getInfo(10));
    
}

let pointInfo : Point = {
    x : 200,
    y : 200,
   getInfo(id ?: number) {
       return id + "";
   }

}

printCoOrdinates(pointInfo)

