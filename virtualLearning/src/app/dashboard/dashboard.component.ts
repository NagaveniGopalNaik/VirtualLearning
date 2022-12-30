import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
choice_course="All";
new_course_pagination:any;
userName:any={};
userImage:any;
categoryData:any;
ongoingCourse:any;
courseCategories:any;
choiceCourse:any;
topBusinessCourse:any;
topWebCourse:any;

display_video_id:any;

categoryImage=[
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

  constructor(private dashboardService:DashboardService,private router:Router) { }

  ngOnInit(): void {
    // sessionStorage.setItem('choice-course',"All");
    if(sessionStorage.getItem('choice')){
      sessionStorage.removeItem('choice');
    }
    this.getUserName();
    this.getCourseCategoryData();
    this.getOngoingCourse();
    this.getCourseCategories();
    this.getChoiceCourse();
    this.getBusinessTopCourse();
    this.getDesignTopCourse();
    // console.log(this.categoryImage[0]);
    
    
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
 
  choiceYourCourse(data:any){
    sessionStorage.getItem('choice-course') || 'All'
    this.choice_course = data;
    sessionStorage.setItem('choice-course', this.choice_course);
    this.getChoiceCourse();
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

  seeAllData(data:any){
    sessionStorage.setItem('choice','seeAll');
    sessionStorage.setItem('seeAllCourseType',data);
    this.router.navigate(['/my-course'])
  }

  getChoiceCourse(){

    this.dashboardService.getChoiceCourse(this.choice_course).subscribe({
      next:(data)=>{
        this.choiceCourse = data;
        console.log(this.choiceCourse);
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  getBusinessTopCourse(){
    this.dashboardService.getBusinessTopCourse("Business").subscribe({
      next:(data)=>{
this.topBusinessCourse = data;
console.log(this.topBusinessCourse);

      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }


  getDesignTopCourse(){
    this.dashboardService.getBusinessTopCourse("Design").subscribe({
      next:(data)=>{
this.topWebCourse = data;
console.log(this.topBusinessCourse);

      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }


  displayVideo(id:any){
this.display_video_id = id;

  }


}
