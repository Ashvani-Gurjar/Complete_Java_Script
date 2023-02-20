class animal{
      constructor(name){
          this._name = name;
     }
     walk(){
          console.log("Your are walking .....");
     }
     get name(){
       return this._name;
     }
     set name(newname){
           this._name = newname
     }
}

let a = new animal("Ashvani");
a.walk();
console.log(a.name)
a.name = "Gurjar"
console.log(a.name)
console.log(a instanceof animal)
let b = 34;
console.log(b instanceof animal)