import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-book-transaction',
  templateUrl: './manage-book-transaction.component.html',
  styleUrls: ['./manage-book-transaction.component.css']
})
export class ManageBookTransactionComponent implements OnInit{
  tranid:number = 0
  constructor(
    private fb : FormBuilder,
    private api :ApiService,
    private router:Router,
    private url:ActivatedRoute
  ){}
    
   ngOnInit(): void {
    this.tranid = this.url.snapshot.params['id'] ;
    if(this.tranid){
      this.api.get_single_tran(this.tranid).subscribe((res:any)=>{
        // console.log(res.data)
        this.booktranform.patchValue(res.data)
      })
      // console.log(this.tranid)
     }
   }
  booktranform = this.fb.group({
    tran_id:[''],
    book_id:[''],
    reciever_id:[''],
    reciever_type:[''],
    issue_date:[''],
    return_date:[''],
  })
  onsave(){
    console.log(this.booktranform.value);
    this.api.post_book_tran(this.booktranform.value).subscribe(
      (res:any)=>{
        this.booktranform.reset();
        this.router.navigate(['librarian/libr-book-transaction']);
        // console.log(res)
        alert('Data Inserted Successfully')
      }
    )
  }
   updatebooktran(){
    this.api.put_book_tran(this.booktranform.value).subscribe(
      (res:any)=>{
        console.log(res.message)
        this.router.navigate(['librarian/libr-book-transaction']);
        alert('Data Updated Successfully')
      }
    )
   }
  reset(){
    this.booktranform.reset()
  }
}
  

