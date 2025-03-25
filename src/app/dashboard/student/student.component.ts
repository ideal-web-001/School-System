import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  showFiller = false;
  login_details:any
  login_as:any 
  sidemode:any ='side'
  autoside:boolean = true
  img_local_url ='http://localhost/upload/';
  img_url = this.img_local_url +'logo.png';
  // img_url:any

  ngOnInit(): void {
    if(window.innerWidth<768){
      this.autoside=false
      this.sidemode='over'

    }
    this.login_details=localStorage.getItem('token')
    console.log(this.login_as=JSON.parse(this.login_details))
    // console.log(this.login_details)
    this.img_url =(this.login_as['user_img'])? this.img_local_url+this.login_as.user_img:this.img_local_url+'logo.png';
  }
}
