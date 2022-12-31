import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
categoryList = [
  "../../assets/images/icn_categories suggestion_business@1.5x.svg",
 "../../assets/images/icn_categories suggestion_design@1.5x.svg",
 "../../assets/images/icn_categories suggestion_fitness@1.5x.svg",
 "../../assets/images/icn_categories suggestion_IT@1.5x.svg",
 "../../assets/images/icn_categories suggestion_marketing@1.5x.svg",
 "../../assets/images/icn_categories suggestion_music@1.5x.svg",
 "../../assets/images/icn_categories suggestion_photography@1.5x.svg",
 "../../assets/images/icn_categories suggestion_teaching@1.5x.svg",
 "../../assets/images/icn_categories suggestion_lifestyle@1.5x.svg",
 "../../assets/images/icn_categories suggestion_code@1.5x.svg",
  
]
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

  getCompletedCourse(){
    
    return this.http.get(`${base_url}completedCourses`,{params:new HttpParams().set('choice','seeAll')});
  }

  // completedCourses

  getCourseCategory(){
    let body={
      "choice":"seeAll"
    }
    return this.http.post(`${base_url}getCategories`,body);
  }

  getChoiceCourse(data:any){
    let view = sessionStorage.getItem('choice') || '';
    let body={
      "choice":data,
      "view":view

    }
    return this.http.post(`${base_url}choiceYourCourse`,body);
  }

  getBusinessTopCourse(data:any){
    let view = sessionStorage.getItem('choice') || '';
    let body = {
      "text":data,
    "choice":view
    }
    return this.http.post(`${base_url}topCoursesInCategory`,body);
  }

  
}
