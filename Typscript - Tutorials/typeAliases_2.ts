type Details = {
    readonly _id : Array<number>
    name : string,
    location : string
}

let data : Details = {
    _id : [1,2,3],
    name : "Angu",
    location : "Bangalore"
}


console.log(data._id);

type UserDetails = {
    readonly _id : string
    name : string,
    location : string
}

let data_2 : UserDetails = {
    _id : "data",
    name : "Angu",
    location : "Bangalore"
}


console.log(data_2._id);