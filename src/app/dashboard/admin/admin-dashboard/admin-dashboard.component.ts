import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  total_std :number=0;
  total_teacher:number=0;
  total_class:number=0;
  total_application:number=0;
  total_librarian:number=0;
  total_staff:number=0;
  total_subject:number=0;
  total_notification:number=0;
  total_expense:number=0;
  lenght:any;

 constructor(
     private api: ApiService
 ){}
 
 ngOnInit(): void {
    this.api.get_student().subscribe(
      (res:any)=>{
        // console.log(res.data)
     this.total_std = res.data.length
    //  console.log(this.total_std)
      }
    )
    this.api.get_teacher().subscribe(
      (res:any)=>{
        console.log(res.data)
     this.total_teacher=res.data.length
     console.log(this.total_teacher)
      }
    )
     this.api.get_class().subscribe(
      (res:any)=>{
        this.total_class=res.data.length
        // console.log(this.total_class)
      }
     )  
     this.api.get_application().subscribe(
      (res:any)=>{
        this.total_application = res.data.length
        console.log(this.total_application)
      }     
    )
    this.api.get_librarian().subscribe(
      (res:any)=>{
        this.total_librarian = res.data.length
        // console.log(this.total_librarian)
      }
    )
    this.api.get_staff().subscribe(
      (res:any)=>{
        this.total_staff=res.data.length
        // console.log(this.total_staff)
      }
    )
    this.api.get_subject().subscribe(
      (res:any)=>{
        this.total_subject=res.data.length
        // console.log(this.total_subject)
      }
    )
    this.api.get_notice().subscribe(
      (res:any)=>{
        this.total_notification=res.data.length
        // console.log(this.total_notification)
      }
    )
    this.api.get_expense().subscribe(
      (res:any)=>{
        this.total_expense = res.data.length
        // console.log(this.total_expense)
      }
    )
  }



}
