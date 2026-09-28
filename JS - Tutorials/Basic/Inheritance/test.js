class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    parent_method() {
        console.log("This is Parent Name is ", this.name);        
    }

    
}

class Child extends Parent {
    constructor(name, age) {
        super(name, age);
        this.height = 60;
    }

    child_height() {
        console.log(`Height is ${this.height}`);        
    }
}

let child = new Child("Angu",35);
child.child_height();
child.parent_method();

let parentObject = new Parent("Muniyasamy",65);
parentObject.parent_method();
