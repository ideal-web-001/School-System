import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarian',
  templateUrl: './manage-librarian.component.html',
  styleUrls: ['./manage-librarian.component.css']
})
export class ManageLibrarianComponent implements OnInit{
librnid:number = 0
hide = true;
img_local_url ='http://localhost/upload/';
img_url:any = this.img_local_url+'logo.png';
selected_img:any;
add_librn!:FormGroup;
librnjndate:any;
constructor(
  private api:ApiService,
  private fb:FormBuilder,
  private router:Router,
  private url:ActivatedRoute,
  private datepipe : DatePipe
){}
    ngOnInit(): void {
      this.librnid = this.url.snapshot.params['id'] ; 
     if(this.librnid){
      this.api.get_single_librarian(this.librnid).subscribe(
        (res:any)=>{
        this.add_librn.patchValue(res.data)
        this.img_url =(res.data['librn_img'])? this.img_local_url+res.data['librn_img']:this.img_local_url+'logo.png';
        console.log(res.data)
      }
      )
     }

  this. add_librn = this.fb.group({
    librn_id : [''],
    librn_name: ['',Validators.required],
    librn_address:['',Validators.required],
    librn_gen:['',Validators.required],
    librn_salary:['',Validators.required],
    librn_mob:['',Validators.required],
    librn_aadhar:['',Validators.required],
    librn_email:['',Validators.required],
    librn_jndate:['',Validators.required],
    librn_password:['',Validators.required]
  })
}
  onsave(){
    // alert("Add");
    // console.log(this.add_std.get('std_name')?.value)
    const formData = new FormData();
    this.librnjndate = this.datepipe.transform(this.add_librn.get('librn_jndate')?.value,'yyyy-MM-dd')
    formData.append('librn_name',this.add_librn.get('librn_name')?.value)
    formData.append('librn_address',this.add_librn.get('librn_address')?.value)
    formData.append('librn_gen',this.add_librn.get('librn_gen')?.value)
    formData.append('librn_salary',this.add_librn.get('librn_salary')?.value)
    formData.append('librn_mob',this.add_librn.get('librn_mob')?.value)
    formData.append('librn_aadhar',this.add_librn.get('librn_aadhar')?.value)
    formData.append('librn_email',this.add_librn.get('librn_email')?.value)
    formData.append('librn_jndate',(this.librnjndate))
    formData.append('librn_password',this.add_librn.get('librn_password')?.value)
    formData.append('photo',this.selected_img)
  
    this.api.post_librarian(formData).subscribe(
      (res:any)=>{
        this.add_librn.reset();
        this.router.navigate(['admin/admin-librarian']);
        alert(res.message)
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
  console.log(this.selected_img)
}

  updatelibrarian(){
    const formData = new FormData();
    this.librnjndate = this.datepipe.transform(this.add_librn.get('librn_jndate')?.value,'yyyy-MM-dd')
    formData.append('librn_id',this.add_librn.get('librn_id')?.value)
    formData.append('librn_name',this.add_librn.get('librn_name')?.value)
    formData.append('librn_address',this.add_librn.get('librn_address')?.value)
    formData.append('librn_gen',this.add_librn.get('librn_gen')?.value)
    formData.append('librn_salary',this.add_librn.get('librn_salary')?.value)
    formData.append('librn_mob',this.add_librn.get('librn_mob')?.value)
    formData.append('librn_aadhar',this.add_librn.get('librn_aadhar')?.value)
    formData.append('librn_email',this.add_librn.get('librn_email')?.value)
    formData.append('librn_jndate',(this.librnjndate))
    formData.append('librn_password',this.add_librn.get('librn_password')?.value)
    formData.append('photo',this.selected_img)
    
    this.api.put_librarian(formData).subscribe(
    (res:any)=>{
      alert(res.message)
    this.router.navigate(['admin/admin-librarian']);
   
    
  })
  }
  
    reset_form(){
      this.add_librn.reset()
    }
    back(){
      this.router.navigate((['/admin/admin-librarian']))
    }
    goback(){
      this.router.navigate((['/admin/admin-librarian']))
    }
}
