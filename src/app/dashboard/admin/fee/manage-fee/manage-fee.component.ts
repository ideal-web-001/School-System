import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-fee',
  templateUrl: './manage-fee.component.html',
  styleUrls: ['./manage-fee.component.css']
})
export class ManageFeeComponent implements OnInit{

  feedate :any
  class: any;
  due_amt: number=0;
  stdid: any;
  duefee:any
  storefee: any;
  paidfee: string | null | undefined;
constructor(
  private fb : FormBuilder,
  private api : ApiService,
  private router : Router,
  private datepipe : DatePipe,
){}
ngOnInit(): void {
  // this.api.get_class().subscribe(
  //   (res:any)=>{
  //     // console.log(res.data)
  //     this.class=res.data
  //   }
  // )
  this.api.get_student().subscribe(
    (res:any)=>{
      console.log(res.data)
    }
  )
}
add_fee = this.fb.group({
 std_id:['',Validators.required],
 std_name:['',Validators.required],
class_name:['',Validators.required],
class_fee:['',Validators.required],
fee_date:['',Validators.required],
fee_rcv:['',Validators.required],
month_fee:['',Validators.required],
std_due:[''],
// fee_paid:['',Validators.required],

})
onSave(){
  console.log(this.add_fee.value);
  this.api.post_fee(this.add_fee.value).subscribe(
    (res:any)=>{
      alert(res.message)
      this.add_fee.reset();
      this.router.navigate(["admin/fee"]);
      console.log(res)
    }
)
}
getstd(event:any){
// alert(this.add_fee.get("std_id")?.value) 
//  alert(event)
this.stdid=this.add_fee.get("std_id")?.value
// alert(this.stdid)
if(this.stdid){
  this.api.get_single_student(this.stdid).subscribe(
    (res:any)=>{
      console.log(res)
        this.add_fee.patchValue(res.data)
        this.duefee = this.add_fee.get("std_due")?.value
         this.paidfee=this.add_fee.get("fee_paid")?.value
    }
  )
}
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // months are zero-indexed
const day = String(today.getDate()).padStart(2, '0');
const localDateString = `${year}-${month}-${day}`;
this.add_fee.controls["fee_date"].setValue(localDateString);

// this.add_fee.controls["fee_date"].setValue(new Date(). toISOString().slice(0,10))
// this.add_appli.controls['appli_date'].setValue(new Date().toISOString().slice(0,10))
}
calcfee($event:any){
  // this.add_fee.get('fee_rcv')?.value
  this.add_fee.get("std_due")?.setValue(String( Number(this.add_fee.get('class_fee')?.value) - Number(this.add_fee.get('fee_rcv')?.value)))
  // this.add_fee.get("fee_paid")?.setValue(String(Number( this.paidfee) + Number(this.add_fee.get('fee_rcv')?.value)))
  if(this.add_fee.get("std_due")?.value==null){
    this.add_fee.get("std_due")?.setValue(String(Number(0)))
  }

 
}
updatefee(){
  this
  this.api.update_fee(this.add_fee.value).subscribe(
    (res:any)=>{
 
     console.log(res)
 
}

  )
}
}
