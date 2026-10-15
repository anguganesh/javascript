// Example : 1
class Animal {

    public animalName: string

    constructor(name: string) {
        this.animalName = name
    }
}

class Dog extends Animal {
    public tailLength: number;

    constructor(name: string, length: number) {
        super(name)
        this.tailLength = length
    }

}

// Create Object for Animal Class and Animal Sub Classes with arguments
function createObjectForAnimal<T extends Animal>(objectType: new (animal_name: string, tail_Length: number) => T, // constructor type parameter
    nameData: string,
    lengthInfo: number): T {

    return new objectType(nameData, lengthInfo)
}


// In createObject function, we used below statement in the argument. This is called Constructor Type Parameter
//  new (animal_name: string, tail_Length: number) => T

let dogObject: Dog = createObjectForAnimal(Dog, "test", 10)
console.log(dogObject.animalName);
console.log(dogObject.tailLength);

/////// ====================================================
// Example : 2

class Birds {

}

class Parrot extends Birds {
    public sing() {
        console.log("Able to Sing");
    }
}


// Create Object for Birds Class and Birds Sub Classes without arguments
function createObjectForBirds<T extends Birds>(objectType: new () => T): T {
    return new objectType();
}

let parrotObject = createObjectForBirds(Parrot)
parrotObject.sing()


