class human{
      constructor(name,color){
          this.name = name;
          this.color = color;
      }
      eat(){
          console.log(`At that time ${this.name} take dinner`);
      }
      favorate(){
          console.log(`${this.name} favorate color is ${this.color}`);
      }
}

class student extends human{
     cloth(){
          console.log(`${this.name} favorate cloth color is ${this.color}`);
     }
     favorate(){
          super.favorate();
          console.log(`${this.name} does not like ${this.color} color`);
      }
}

let a = new human("Ashvani","yellow");
let b = new student("Arjun","pink");

a.eat();
a.favorate();
b.cloth();
b.eat();
b.favorate();

console.log(a instanceof human);
console.log(b instanceof human);
console.log(b instanceof student);
console.log(a instanceof student);
