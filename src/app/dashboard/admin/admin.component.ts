import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  autoside:boolean = true
  login_details:any
  login_as:any 
  sidemode:any ='side'
  ngOnInit(): void {
    if(window.innerWidth<768){
      this.autoside=false
      this.sidemode='over'

    }
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
  }
}
