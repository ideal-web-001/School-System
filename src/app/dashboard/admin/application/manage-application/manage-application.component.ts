import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-application',
  templateUrl: './manage-application.component.html',
  styleUrls: ['./manage-application.component.css']
})
export class ManageApplicationComponent implements OnInit{
  apid:any
  add_appli!:FormGroup;
  status:string='accept'
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    private url : ActivatedRoute,
  ){}
  
  
  
  ngOnInit(): void {
    this.add_appli=this.fb.group({
      appli_id:['',Validators.required],
     appli_type:['',Validators.required],
     appli_msg:['',Validators.required],
     appli_status:['',Validators.required]
    })
    
    this.apid= this.url.snapshot.params['id'];
    this.add_appli.get('appli_id')?.setValue(this.apid)
    if(this.apid){
      this.api.get_single_application(this.apid).subscribe(
        (res:any)=>{
          console.log(res)
          console.log(res.data[0].std_name)
          this.add_appli.get('appli_type')?.setValue(String(res.data[0].appli_type))
          this.add_appli.get('appli_msg')?.setValue(String(res.data[0].appli_msg))

        }
      )
    }
    
  }
  onupdate(){ 
    this.add_appli.get('appli_status')?.setValue(1)
    console.log(this.add_appli.value);
      this.api.put_application(this.add_appli.value).subscribe(
        (res:any)=>{
          console.log(res);
        }
      )
      this.router.navigate(["admin/application"]);
    }
    onreject(){
      this.add_appli.get('appli_status')?.setValue(2)
    console.log(this.add_appli.value);
    this.api.put_application(this.add_appli.value).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
    this.router.navigate(["admin/application"]);
    }
   R_appli(){
    this.router.navigate(["admin/application"]);
   } 
}


