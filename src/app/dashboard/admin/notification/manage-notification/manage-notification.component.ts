import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-notification',
  templateUrl: './manage-notification.component.html',
  styleUrls: ['./manage-notification.component.css']
})
export class ManageNotificationComponent implements OnInit {
  nid:number=0;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private url:ActivatedRoute
  ) { }

   ngOnInit():  void {
    this.nid=this.url.snapshot.params["id"];
    console.log(this.nid);
    this.api.get_single_notice(this.nid).subscribe(
      (res:any)=>{
        console.log(res.data);
        this.add_notification.patchValue(res.data);
      }
    )
    console.log(this.nid);
   
  }

  add_notification = this.fb.group({
    notice_type: ['', Validators.required],
    notice_msg: ['', Validators.required],
    notice_date: ['', Validators.required]
  })

  onSave() {
    // console.log(this.add_notification.value.notice_date);
    const rawDate = this.add_notification.value.notice_date;
    if (rawDate) {
      const selectedDate = new Date(rawDate);
      // Extract local date parts
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // 0-based
      const day = String(selectedDate.getDate()).padStart(2, '0');
      // Format as YYYY-MM-DD
      const formattedDate = `${year}-${month}-${day}`;
      this.add_notification.value.notice_date = formattedDate;
    }

    // console.log(this.add_notification.value.notice_date);


    this.api.post_notice(this.add_notification.value).subscribe(
      (res: any) => {
        alert(res.message);
        this.router.navigate(['admin/notification']);
        // console.log(res)
        alert(res.message);
      }
    )
  }
  reset_form() {
    this.add_notification.reset();
  }
  goback(){
    this.router.navigate(['admin/notification']);
  }

}

