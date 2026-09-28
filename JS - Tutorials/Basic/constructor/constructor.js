

class Alien {
    constructor(name, technology, experience = 14) {
        this.name = name;
        this.technology = technology;
        this.experience = experience;
    }

    print = function objectData() {
        console.log("Name : ", this.name);
        console.log("Technology : ", this.technology);       
    }

    arrow_function = () => {
        console.log("Name : ", this.name);
        console.log("Technology : ", this.technology);  
    }
}

let newData = new Alien("Angu", "JS", 15);
let defaultData = new Alien("Angu", "Java");
//object.print();
//object.arrow_function();
console.log(newData.experience);
console.log(defaultData.experience);







