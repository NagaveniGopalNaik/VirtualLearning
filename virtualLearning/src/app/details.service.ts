import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
body:any;
  constructor(private http:HttpClient) { }


  getCourseBody(){
    let id:any;
    if(sessionStorage.getItem('course-id')){
      id = String(sessionStorage.getItem('course-id'));
    }
    
    this.body = {
      "courseId":String(id)
    }
  }


  getCourseOverviewDetails(){
   this.getCourseBody();
    
    return this.http.post(`${base_url}getCourse/overview`,this.body);
  } 

  getCourseChapterDetails(){
    
    let id:any;
    if(sessionStorage.getItem('course-id')){
      id = String(sessionStorage.getItem('course-id'));
    }
    
    let body = {
      "view":"chapters",
      "courseId":String(id)
    }
     return this.http.post(`${base_url}getCourse/chapters`,body);
   } 
  

  enrollCourse(){
   this.getCourseBody();
    return this.http.post(`${base_url}enrollNow`,this.body);
  }
}
