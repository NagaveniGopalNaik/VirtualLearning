import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

loginData:any;
loginForm!:FormGroup;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName':new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required])
    })
  }
  login(){
    
    if(this.loginForm.valid == true){
      this.loginService.signin(this.loginForm.value).subscribe({
        next:(data)=>{
          this.loginData = data;
          console.log(this.loginData);
          
          alert(this.loginData.message);
        if(this.loginData.message == 'Login successful'){
          sessionStorage.setItem('token',this.loginData.access_token)
          this.router.navigate(['/dashboard']);
        }
          
        },
        error:(e)=>{
          console.log(e);
          
          
        }
      });
    } else {
      alert("Username and password must be provided");
    }
    // this.router.navigate(['/dashboard']);
    
  }

}
