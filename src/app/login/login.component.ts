import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login!:FormGroup
  hide=true;
  res: any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private api:ApiService
  ){}
  ngOnInit(): void {
    this.login = this.fb.group({
      uid: ['', Validators.required],
      pwd: ['', Validators.required],
    })
  }
  ontologin(){
    this.api.do_login(this.login.value).subscribe(
      (res:any) =>{
        localStorage.setItem('token',JSON.stringify(res.data))
        alert(res.message)
        if(res.data['user_type']=='student'){
          this.router.navigate(['/student'])
        }
        else if(res.data['user_type']=='admin'){
          this.router.navigate(['/admin'])
        }
        else if(res.data['user_type']=='teacher'){
          this.router.navigate(['/teacher'])
        }
        else if(res.data['user_type']=='librarian'){
          this.router.navigate(['/librarian'])
        }
        
      }
    )
  }
}
