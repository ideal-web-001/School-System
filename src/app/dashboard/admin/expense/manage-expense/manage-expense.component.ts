import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-expense',
  templateUrl: './manage-expense.component.html',
  styleUrls: ['./manage-expense.component.css']
})
export class ManageExpenseComponent implements OnInit {
  expid :number = 0;
  expense_id : number =0;
  constructor(
    private fb : FormBuilder,
    private api :ApiService,
    private router:Router,
    private url :ActivatedRoute
  ){}

  ngOnInit(): void {
    this.expid= this.url.snapshot.params['id']
    if(this.expid){
      this.api.get_single_expense(this.expid).subscribe(
        (res:any)=>{
          // console.log(res.data)
          this.expenseform.patchValue(res.data)
        }
      )
      // console.log(this.expid)
    }
  }
  expenseform = this.fb.group({
    exp_id:[''],
    exp_name:[''],
    exp_date:[''],
    exp_amount:[''],
    exp_paid:[''],
    exp_due:['']
  })
  onSave(){
    // console.log(this.expenseform.value);
    this.api.post_expense(this.expenseform.value).subscribe(
      (res:any)=>{
        this.expenseform.reset();
        this.router.navigate(['/admin/expense']);
        console.log(res);
      }
    )
  }
  updateExp(){
    console.log(this.expenseform.value)
    this.api.put_expense(this.expenseform.value).subscribe((res:any)=>{
      console.log(res.message)
      this.router.navigate(['/admin/expense']);
      alert("update successfully")
    })
    
  }
    reset(){
      this.expenseform.reset()
    }
  }
  

