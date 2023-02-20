class complex{
     constructor(real1,comp1){
          this.real = real1;
          this.comp = comp1;
     }
     add(num){
          this.real = this.real + num.real;
          this.comp = this.comp + num.comp;
     }
}

let number1 = new complex(23,45);
let number2 = new complex(2,4);

number1.add(number2);
console.log(`${number1.real}+${number1.comp}i`);