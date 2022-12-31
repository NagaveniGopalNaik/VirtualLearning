import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getTopSearch(){
    return this.http.get(`${base_url}topSearches`);
  }

  searchCourse(body:any){
    return this.http.post(`${base_url}searchCourse`,body);
  }

  searchByCategory(body:any){
    return this.http.post(`${base_url}searchByCategory`,body);
  }

  filter(body:any){
    return this.http.post(`${base_url}filter`,body);
  }

  // searchByCategory
}
