class Employee{
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
     requestForCoffe(x){
          console.log(`Your ${x} coffee is ready`);
     }
     requestForLeave(x){
      super.requestForLeave(x);
      console.log("Your extra leave is granted")
}
}

let a = new Employee();
let b = new programmer();

b.login();
a.logout();
b.login();
b.requestForLeave(4);
a.requestForLeave(4);
b.requestForCoffe(5);
