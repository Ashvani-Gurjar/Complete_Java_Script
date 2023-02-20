class RailWayForms{
     constructor(name,no,address){
          console.log("Constructor Called...." + name + no + address);
           this.name = name;
           this.no = no;
           this.address = address;
     }
     submit(){
          alert(this.name + ": Your form is Submitted Successfully with train no " + this.no  + " and address :" + this.address)
     }
     cancel(){
          alert(this.name + ": Your form is Canceled for train no : " + this.no + " and address :" + this.address);
          this.no = 0;
     }
}

let ashvani = new RailWayForms("Ashvani",23232,"India");
let ankush = new RailWayForms("Ankush",23534,"Etawah india");

ashvani.submit();
ankush.submit();
ashvani.cancel();