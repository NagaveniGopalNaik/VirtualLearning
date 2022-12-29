import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
choice_course:any;
new_course_pagination:any;
userName:any={};
userImage:any;
categoryData:any;
ongoingCourse:any;
courseCategories:any;
  constructor(private dashboardService:DashboardService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('choice')){
      sessionStorage.removeItem('choice');
    }
    this.getUserName();
    this.getCourseCategoryData();
    this.getOngoingCourse();
    this.getCourseCategories();
  }

  getUserName(){
    this.dashboardService.getUserFullName().subscribe({
      next:(data)=>{
        let fullname = data;
        this.userName = fullname;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })

  }
 
  choiceYourCourse(data:String){
    this.choice_course = data;
  }
  newCoursePagination(data:any){
    this.new_course_pagination = data;
    sessionStorage.setItem('bannerPage',data);
    this.getCourseCategoryData();
  }

  getCourseCategoryData(){
    this.dashboardService.getCategoryData().subscribe({
      next:(data)=>{
        console.log(data);
        this.categoryData = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  getOngoingCourse(){
    this.dashboardService.getCategoryData().subscribe({
      next:(data)=>{
        console.log(data);
        this.ongoingCourse = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  getCourseCategories(){
    this.dashboardService.getCourseCategory().subscribe({
      next:(data)=>{
        console.log(data);
        this.courseCategories = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  seeAllData(){
    sessionStorage.setItem('choice','seeAll');
    this.router.navigate(['/my-course'])
  }

}
