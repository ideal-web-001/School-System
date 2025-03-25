import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addstd-application',
  templateUrl: './addstd-application.component.html',
  styleUrls: ['./addstd-application.component.css']
})
export class AddstdApplicationComponent implements OnInit{
  dataSource = new MatTableDataSource();
  login_details:any;
  uid:any;
  id:number=0;
  aplid:any;
  add_appli: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    private url:ActivatedRoute
  ){}
  ngOnInit(): void {
   
    this.login_details=localStorage.getItem('token')
      console.log(this.uid=JSON.parse(this.login_details))
      this.id=this.uid.type_id
      // console.log(this.id=this.uid.type_id)
    this.add_appli= this.fb.group({
      
      std_id:[this.id,Validators.required],
      appli_type:['',Validators.required],
      appli_msg:['',Validators.required],
      appli_date:['',Validators.required]
      
      
    })
    this.login_details=localStorage.getItem('token')
      // console.log(this.uid=JSON.parse(this.login_details))
      this.id=this.uid.type_id
      // console.log(this.id=this.uid.type_id)
      // this.api.get_single_std_application(this.id).subscribe(
      //   (res:any)=>{
      //     console.log(res.data);
      //     this.dataSource.data = res.data;
          // this.total_count = res.data.length;
          
      //   }
      // )
    this.add_appli.controls['appli_date'].setValue(new Date().toISOString().slice(0,10))
   
    this.aplid=this.url.snapshot.params['id'];
    console.log(this.aplid)
    if(this.aplid){
      this.api.get_single_application(this.aplid).subscribe(
        (res:any)=>{
          console.log(res);
          this.add_appli.get('appli_type')?.setValue(res.data[0].appli_type)
          this.add_appli.get('appli_msg')?.setValue(res.data[0].appli_msg)

        }
      )
    }
  }
  OnSave(){
    console.log()
    console.log(this.add_appli.value);
    this.api.post_appli(this.add_appli.value).subscribe(
      (res:any)=>{
        console.log(res);
        alert(res.meggage);
       
      }
    )
}
back()
{
  this.router.navigate(['/student/std-application']);
}
}

