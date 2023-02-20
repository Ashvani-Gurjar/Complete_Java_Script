class Employee{
     constructor(name){
          this.name = name;
          console.log("This is a Employee construction")
     }
     login(){
          console.log("Your are logging succesfully");
     }
     logout(){
          console.log("Your are logged out successfully");
     }
     requestForLeave(x){
          console.log(`Your ${x} days leave is grantted`);
          
     }
}
class programmer extends Employee{
     // constructor(){
     //      console.log("This is a programmer construction")
     // }
      constructor(name){
          super(name);
          console.log(this.name + ": this is a programmer constraction")
      }
     requestForCoffe(x){
          console.log(`Your ${x} coffee is ready`);
     }
     requestForLeave(x){
      super.requestForLeave(x);
      console.log("Your extra leave is granted")
}
}

let b = new programmer("Ashvani");

b.login();
