
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.css']
})
export class ManageClassComponent  implements OnInit{
classid:number = 0;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    private url : ActivatedRoute
  ){}
  ngOnInit(): void {
    this.classid=(this.url.snapshot.params['id'])
    // console.log(this.classid)
    if(this.classid){
      this.api.get_single_class(this.classid).subscribe(
        (res:any)=>{
          console.log(res.data)
          this.add_class.patchValue(res.data)
        }
      )
 
    }
  
      
  }
  add_class=this.fb.group({
    class_id:[''],
    class_name:['',Validators.required],
    class_fee:['',Validators.required]
  })
  OnAdd(){
    console.log(this.add_class.value);
    this.api.post_class(this.add_class.value).subscribe(
      (res:any)=>{
        alert(res.message);
        this.router.navigate(['/admin/class'])
        this.add_class.reset();
      }
    )
   
  }
  onUpdate(){
    this.api.put_class(this.add_class.value).subscribe(
     (res:any)=>{
      alert("Data Updated Successfully")
      this.router.navigate(['/admin/class']);
      console.log(res)
  
     }
    )
       }
}
