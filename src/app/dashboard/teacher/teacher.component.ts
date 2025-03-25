import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  showFiller = false;
  img_local_url ='http://localhost/upload/';
  img_url = this.img_local_url +'logo.png';
  login_details:any
  login_as:any 
  autoside:boolean = true
  sidemode:any ='side'
  constructor( 
    private router:Router
    ){
      this.login_details=localStorage.getItem('token')
      this.login_as=JSON.parse(this.login_details)
      if(!this.login_details){
        this.router.navigate(['../login'])
      }
    }
  ngOnInit(): void {
    if(window.innerWidth<768){
      this.autoside=false
      this.sidemode='over'

    }
    this.img_url =(this.login_as['user_img'])? this.img_local_url+this.login_as.user_img:this.img_local_url+'logo.png';
  }
}
