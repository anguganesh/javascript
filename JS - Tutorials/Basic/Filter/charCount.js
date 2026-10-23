let array = [4,2,2,3,1,0,0,-1,-2,-1];



function charCountInfo(arrayData) {
    let unique_values = new Array();

    let mapInfo =  arrayData.reduce( (mapData, eachValue) => {
                        if(mapData.has(eachValue)) {
                            mapData.set(eachValue, mapData.get(eachValue) + 1)
                        }
                        else {
                            mapData.set(eachValue, 1)  
                        }
                        return mapData
                    }, new Map());

    for(let [key, value] of mapInfo.entries())
        if(value === 1)
            unique_values.push(key)
    return unique_values    
}

let unique_values = charCountInfo(array)
console.log(unique_values);


    


