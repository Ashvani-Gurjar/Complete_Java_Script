class complex{
     constructor(real,comp){
          console.log("Constracter Called");
          this.real = real;
          this.comp = comp;
     }
     number(){
          console.log(`Your number is ${this.real}+${this.comp}i  and real part ${this.real} and complex part ${this.comp}`);
     }
     get real(){
          return this._real;
     }
     get comp(){
         return this._comp;
     }
     set real(newreal){
          this._real = newreal;
     }
     set comp(newcomp){
          this._comp = newcomp;
     }
}

let number1 = new complex(23,45);
let number2 = new complex(34,45);

number1.number();
number2.number();
console.log(number1.real);
console.log(number1.comp);
console.log(number2.real);
console.log(number2.comp);
number1.real = 99;
number1.comp = 100;
number2.real = 199;
number2.comp = 1100;
number1.number();
number2.number();

