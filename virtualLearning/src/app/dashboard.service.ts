import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getUserFullName(){
    return this.http.get(`${base_url}getName`);
  }
  getUserImage(){
    return this.http.get(`${base_url}getProfileImage`,{responseType:'text'});
  }

  getCategoryData(){
    let page = sessionStorage.getItem('bannerPage') || '1';
    return this.http.get(`${base_url}getBanner`,{params:new HttpParams().set('page',page)});
  }

  getOngoingCourse(){
    let choice = sessionStorage.getItem('choice') || '';
    return this.http.get(`${base_url}ongoingCourses`,{params:new HttpParams().set('choice',choice)});
  }

  getCourseCategory(){
    let body={
      "choice":"seeAll"
    }
    return this.http.post(`${base_url}getCategories`,body);
  }

  
}
