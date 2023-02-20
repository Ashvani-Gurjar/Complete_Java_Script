class complex{
     constructor(real,comp){
          console.log("Constracter Called");
          this.real = real;
          this.comp = comp;
     }
     number(){
          console.log(`Your number is ${this.real}+${this.comp}i  and real part ${this.real} and complex part ${this.comp}`);
     }
}

let number1 = new complex(23,45);
let number2 = new complex(34,45);

number1.number();
number2.number();