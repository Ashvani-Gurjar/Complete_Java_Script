class Employee{
    constructor(name){
       this.name = Employee.captilized(name);
    }
     walk(){
          console.log(this.name + ": Employee is now walking");
     }
    static captilized(name){
          return name.charAt(0).toUpperCase() + name.substr(1,name.length);
     }
}

let a = new Employee("gshvani");
a.walk()