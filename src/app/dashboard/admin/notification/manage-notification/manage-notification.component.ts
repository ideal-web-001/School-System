import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-notification',
  templateUrl: './manage-notification.component.html',
  styleUrls: ['./manage-notification.component.css']
})
export class ManageNotificationComponent {
     constructor(
      private fb : FormBuilder,
      private api : ApiService,
      private router : Router 
     ){}

     add_notification = this.fb.group({
      notice_type:['',Validators.required],
      notice_msg:['',Validators.required],
      notice_date:['',Validators.required]
     })
     onSave(){
      console.log(this.add_notification.value);
      this.api.post_notice(this.add_notification.value).subscribe(
      (res:any)=>{
        this.router.navigate(['admin/notification']);
        console.log(res)
      }
      )
    }
      reset_form(){
        this.add_notification.reset();
      }
     }
