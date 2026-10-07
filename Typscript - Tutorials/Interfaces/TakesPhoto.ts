// Declares Custom Data Types
type frotOrBack = "FRONT" | "BACK"

interface TakesPhoto {
    // All Properties and Methods MUST be PUBLIC and NOT Required to mention explicitly
    cameraMode : frotOrBack,
    filter : string,
    burst : number
}


interface Story {
    createStory() : void
}


class Instagram implements TakesPhoto {

    public cameraMode : frotOrBack  // Property Name and Visibility should be SAME
    public filter : string
    public burst : number


    constructor(
        cameraMode : frotOrBack,
        filter : string,
        burst : number 
    ) {
        this.cameraMode  = cameraMode
        this.filter = filter
        this.burst = burst
    }
}

class Youtube implements Story, TakesPhoto {
    
    public cameraMode: frotOrBack
    public filter: string
    public burst: number

    constructor(
        cameraMode: frotOrBack,
        filter: string,
        burst: number
    ) {
        this.cameraMode = cameraMode
        this.filter = filter
        this.burst = burst
    }
    

    createStory(): void {
        console.log("Story Created");
            
    }
}

let youtubeObject : Youtube = new Youtube("FRONT", "ON", 10);
youtubeObject.createStory()

let instagramObject : Instagram = new Instagram("FRONT", "ON", 10);
console.log(instagramObject);
