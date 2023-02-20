class RailWayForm{
     submit(){
          alert(this.name + ": Your form is submitted for train no " + this.formtrain)
     }
     cancel(){
          alert(this.name +": Your form is Canceled for train no "+ this.formtrain)
     }
     fill(formname,formtrain){
          this.name = formname;
          this.formtrain = formtrain;
     }
}

let ashvani = new RailWayForm();
ashvani.fill("Ashvani", 23323332)
let ankush  = new RailWayForm();
ankush.fill("Ankush", 3393938)

ashvani.submit();
ankush.submit();
ankush.cancel();