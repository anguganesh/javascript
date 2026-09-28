class Person {

    #full_name;  

    constructor(full_name) {
        this.#full_name = full_name;
    }

    get fullName() {
        return this.#full_name;
    }

    set setFullName(newName) {
        this.#full_name = newName;
    }

}

let person_object = new Person("Ganesh");
console.log(person_object.fullName);
console.log(person_object.full_name);
person_object.setFullName = "Dhinesh"
console.log(person_object.fullName);

