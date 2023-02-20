class Animal{
     constructor(name,color){
          this.name = name;
          this.color = color;
     }
     pet(){
          console.log(`${this.name} is a pet animal`);
     }
     eat(){
          console.log(`${this.name} is now eating`);
     }

}

class Monkey extends Animal{
     banana(){
          console.log(`${this.name} is eating banana`);
     }
     jumping(){
          console.log(`${this.name} is now jumping`);
     }
}

let dog = new Animal("shera","white")
let monkey = new Monkey("shera","white")

dog.eat()
monkey.banana()
monkey.eat()
dog.eat()
monkey.pet()