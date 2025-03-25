import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.css']
})
export class ManageSubjectComponent {

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService
  ){}
  add_sub=this.fb.group({
    sub_id:['',],
    sub_name:['',Validators.required],
    
  })
  OnAdd(){
    console.log(this.add_sub.value);
    this.api.post_subject(this.add_sub.value).subscribe(
      (res:any)=>{
        // console.log(res.message);
        
          this.router.navigate(['/admin/subject']);
          alert(res.message);
          this.add_sub.reset();
        
        
        
      }
    )
}
}
