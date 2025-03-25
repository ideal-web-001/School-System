import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-libr-application',
  templateUrl: './manage-libr-application.component.html',
  styleUrls: ['./manage-libr-application.component.css']
})
export class ManageLibrApplicationComponent {
  librn_application: any;
//  libr_application !:FormGroup
 constructor( 
  private fb : FormBuilder,
  private api :ApiService,
  private router:Router){
 
 
 
  this.librn_application = this.fb.group({
    appli_type:[''],
    appli_msg:[''],
    sender_type:[''],
  })
 }
 onsave(){
  // console.log(this.librn_application.value);
  this.api.post_librnapplication(this.librn_application.value).subscribe(
    (res:any)=>{
      this.librn_application.reset();
      this.router.navigate(['librarian/libr-application']);
      alert('Data Inserted Successfully')
      // console.log(res)
    }
  )
}
reset(){
  this.librn_application.reset()
}
}
