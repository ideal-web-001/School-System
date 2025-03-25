import { DatePipe } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  sid: number = 0;
  class:any
  hide = true;
  img_local_url ='http://localhost/upload/';
  img_url:any = this.img_local_url+'logo.png';
  selected_img:any;
  add_std!:FormGroup;
  stddob : any;
  clsid:any
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private url: ActivatedRoute,
    private datepipe : DatePipe
  ) { }

  ngOnInit(): void {
    this.sid = this.url.snapshot.params['id'];
    if (this.sid) {
      this.api.get_single_student(this.sid).subscribe(
        (res: any) => {
          this.add_std.patchValue(res.data);
          this.img_url =(res.data['std_img'])? this.img_local_url+res.data['std_img']:this.img_local_url+'logo.png';
          console.log(res.data)
        }
      )
     
    }
    this.api.get_class().subscribe(
      (res:any)=>{
        // console.log(res.data)
        this.class=res.data
      }
    )

  this.add_std = this.fb.group({
    std_id: [''],
    std_name: ['', Validators.required],
    std_roll: ['', Validators.required],
    std_due: ['', Validators.required],
    std_fname: ['', Validators.required],
    std_mname: ['', Validators.required],
    std_dob: ['', Validators.required],
    std_email: ['', Validators.required],
    std_mob: ['', Validators.required],
    std_aadhar: ['', Validators.required],
    std_gender: ['', Validators.required],
    std_bg: [''],
    std_nationality: ['', Validators.required],
    std_identification: [''],
    std_address: ['', Validators.required],
    std_password: [''],
    class_id: ['', Validators.required],
    std_photo:['']
  })
  }
  
  onSave() {
    // console.log(this.add_std.get('std_name')?.value)
    const formData = new FormData();
    this.stddob = this.datepipe.transform(this.add_std.get('std_dob')?.value,'yyyy-MM-dd')
    formData.append('std_name',this.add_std.get('std_name')?.value)
    formData.append('std_roll',this.add_std.get('std_roll')?.value)
    formData.append('std_due',this.add_std.get('std_due')?.value)
    formData.append('std_dob',(this.stddob))
    formData.append('std_email',this.add_std.get('std_email')?.value)
    formData.append('std_mob',this.add_std.get('std_mob')?.value)
    formData.append('std_gender',this.add_std.get('std_gender')?.value)
    formData.append('std_aadhar',this.add_std.get('std_aadhar')?.value)
    formData.append('std_nationality',this.add_std.get('std_nationality')?.value)
    formData.append('std_bg',this.add_std.get('std_bg')?.value)
    formData.append('std_identification',this.add_std.get('std_identification')?.value)
    formData.append('std_fname',this.add_std.get('std_fname')?.value)
    formData.append('std_mname',this.add_std.get('std_mname')?.value)
    formData.append('std_address',this.add_std.get('std_address')?.value)
    formData.append('std_password',this.add_std.get('std_password')?.value)
    formData.append('class_id',this.add_std.get('class_id')?.value)
    formData.append('photo',this.selected_img)

    this.api.post_std(formData).subscribe(
      (res: any) => {
        this.router.navigate(['/admin/admin-student']);
        alert(res.message);
      }
    )

  }
  onImgChng(file:any){
   if(file[0].length===0){
    return
   }
   this.selected_img = file[0];
    let reader = new FileReader();
    reader.onload = () =>{
      this.img_url = reader.result;
    }
    reader.readAsDataURL(file[0]);
  }

  back(){
    this.router.navigate(['/admin/admin-student']);
  }

    updatestd() {
      // console.log(res.message)
     this.stddob = this.datepipe.transform(this.add_std.get('std_dob')?.value,'yyyy-MM-dd')
     const formData = new FormData();
     formData.append('std_id',this.add_std.get('std_id')?.value)
     formData.append('std_name',this.add_std.get('std_name')?.value)
     formData.append('std_roll',this.add_std.get('std_roll')?.value)
    //  formData.append('std_dob',this.add_std.get('std_dob')?.value)
     formData.append('std_dob',(this.stddob))
     formData.append('std_email',this.add_std.get('std_email')?.value)
     formData.append('std_mob',this.add_std.get('std_mob')?.value)
     formData.append('std_gender',this.add_std.get('std_gender')?.value)
     formData.append('std_aadhar',this.add_std.get('std_aadhar')?.value)
     formData.append('std_nationality',this.add_std.get('std_nationality')?.value)
     formData.append('std_bg',this.add_std.get('std_bg')?.value)
     formData.append('std_identification',this.add_std.get('std_identification')?.value)
     formData.append('std_fname',this.add_std.get('std_fname')?.value)
     formData.append('std_mname',this.add_std.get('std_mname')?.value)
     formData.append('std_address',this.add_std.get('std_address')?.value)
     formData.append('std_password',this.add_std.get('std_password')?.value)
     formData.append('class_id',this.add_std.get('class_id')?.value)
     formData.append('photo',this.selected_img)
   
   
     this.api.put_std(formData).subscribe(
      (res: any) => {
        this.router.navigate(['/admin/admin-student']);
        // console.log(this.stddob);
        alert(res.message)
      }
    )
  }
  reset_form() {
    this.add_std.reset();
  }
  goback(){
    this.router.navigate(['/admin/admin-student']);
  }
  onrollno(event:any){
    const fromdata = new FormData()
    console.log(event)
    fromdata.append('class_id', event)
    this.api.count_std(fromdata).subscribe(
      (res:any)=>{
        // console.log(res.data[0].total_std)
        this.add_std.get("std_roll")?.setValue(res.data[0].total_std +1)
        this.clsid=(this.add_std.get('class_id')?.value)
        this.api.get_single_class(this.clsid).subscribe(
          (res:any)=>{
            // console.log(res)
          this.add_std.get("std_due")?.setValue(res.data.class_fee)
          }
        )
        
      }
    )
  }

}
