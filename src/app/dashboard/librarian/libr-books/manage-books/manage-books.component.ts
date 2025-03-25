import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  bookid:number = 0
constructor(
  private fb : FormBuilder,
  private api :ApiService,
  private router:Router,
  private url : ActivatedRoute
){}
ngOnInit(): void {
   this.bookid= this.url.snapshot.params['id'];
    if(this.bookid){
      this.api.get_single_book(this.bookid).subscribe((res:any)=>{
        this.bookform.patchValue(res.data)
      })
    }
}
bookform = this.fb.group({
  book_id:[''],
  book_price:[''],
  book_name:[''],
  book_edition:[''],
  book_publi:[''],
  book_author:['']
})
onsave(){
  console.log(this.bookform.value);
  this.api.post_book(this.bookform.value).subscribe(
    (res:any)=>{
      this.bookform.reset();
      alert('Data Inserted Successfully ')
      this.router.navigate(['librarian/libr-books']);
    }
  )
}
updatebook(){
this.api.put_book(this.bookform.value).subscribe((res:any)=>{
  console.log(res.message);
  this.bookform.reset()
  this.router.navigate(['librarian/libr-books']);
  alert('Data Updated Successfully ')
})
}

  reset(){
    this.bookform.reset()
  }
}
