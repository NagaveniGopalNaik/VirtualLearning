import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(data:any){
    console.log(data);
    
    return this.http.post(`${API_URL}signIn`,data);
  }
}
// ,{
    //   headers:new HttpHeaders().set('Access-Control-Allow-Origin',"http://20.204.120.151:443/")
    // }