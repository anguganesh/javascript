// Declares Custom Data Types
type frotOrBack = "FRONT" | "BACK"
type filterType = "ON" | "OFF"

interface TakesPhoto {
    // All Properties and Methods MUST be PUBLIC and NOT Required to mention explicitly
    cameraMode : frotOrBack,
    burst : number,
    filter ?: filterType
}


interface Story {
    createStory() : void
}


class Instagram implements TakesPhoto {

    public cameraMode : frotOrBack  // Property Name and Visibility should be SAME
    public burst : number
    public filter ?: filterType = "ON"


    constructor(
        cameraMode : frotOrBack,
        burst : number   
    ) {
        this.cameraMode  = cameraMode
        this.burst = burst
    }
}

class Youtube implements Story, TakesPhoto {
    
    public cameraMode: frotOrBack
    public burst: number
    public filter?: filterType

    constructor(
        cameraMode: frotOrBack,
        burst: number,
        filter: filterType = "ON",
    ) {
        this.cameraMode = cameraMode
        this.burst = burst
        this.filter = filter
    }
    

    createStory(): void {
        console.log("Story Created");         
    }
}

let youtubeObject : Youtube = new Youtube("FRONT", 10, "OFF");
youtubeObject.createStory();
console.log(youtubeObject);


let instagramObject : Instagram = new Instagram("FRONT", 10);
console.log(instagramObject);
