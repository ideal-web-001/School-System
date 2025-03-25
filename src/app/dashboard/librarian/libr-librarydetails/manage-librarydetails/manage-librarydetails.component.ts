import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarydetails',
  templateUrl: './manage-librarydetails.component.html',
  styleUrls: ['./manage-librarydetails.component.css']
})
export class ManageLibrarydetailsComponent implements OnInit{

libraryid:number=0;
constructor(
  private fb : FormBuilder,
  private api :ApiService,
  private router:Router,
  private url:ActivatedRoute
){}
ngOnInit(): void {
  this.libraryid = this.url.snapshot.params['id'] ; 
 if(this.libraryid){
  this.api.get_single_library(this.libraryid).subscribe((res:any)=>{
    // console.log(res.data)
    this.libraryform.patchValue(res.data);
  })
  // console.log(this.libraryid)
 }
}

 libraryform = this.fb.group({
   library_id:[''],
   library_name:['']
 })

 onsave(){
  console.log(this.libraryform.value);
  this.api.post_library(this.libraryform.value).subscribe(
    (res:any)=>{
      // this.libraryform.reset();
      this.router.navigate(['librarian/libr-library-details']);
      alert('Data Inserted successfully')
    }
  )
}
updatelibrary(){
  this.api.put_library(this.libraryform.value).subscribe((res:any)=>{
    console.log(res.message);
    // this.libraryform.reset()
    this.router.navigate(['librarian/libr-library-details']);
    alert('Data updated successfully')
  })
  }
reset(){
  this.libraryform.reset()
}
}
