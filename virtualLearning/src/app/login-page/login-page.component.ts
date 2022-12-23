import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
username="";
password="";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    let obj={"userName":this.username, "password":this.password};
    console.log(obj);
    this.loginService.signin(obj).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(e)=>{
        console.log(e);
        
      }
    });
    // this.router.navigate(['/dashboard']);
    
  }

}
