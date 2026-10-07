type Person = {
  name: string;
  greet(): void;
}

class Employee implements Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  public greet(): void {
    console.log("Hello,", this.name);
  }
}

let employee_object: Employee = new Employee("Ganesh");
employee_object.greet();

