import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(data:any){
    console.log(data);
    
    return this.http.post("http://52.172.238.166:3000/signIn",data);
  }
}
// ,{
    //   headers:new HttpHeaders().set('Access-Control-Allow-Origin',"http://20.204.120.151:443/")
    // }