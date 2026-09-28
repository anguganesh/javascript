class Person {

    _full_name;  

    constructor(full_name) {
        this._full_name = full_name;
    }

    get fullName() {
        return this._full_name;
    }

    set setFullName(newName) {
        this._full_name = newName;
    }

}

class SpecificPerson extends Person {

    constructor(full_name) {
        super(full_name)
    }

}

let person_object = new Person("Ganesh");
console.log(person_object.fullName);
person_object.setFullName = "Dhinesh";
console.log(person_object.fullName);


let specific_person = new SpecificPerson("test");
console.log(specific_person._full_name);

