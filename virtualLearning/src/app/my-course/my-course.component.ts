import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {
course_completion_status='Ongoing';
 courseList: any;
 currentCourse='ongoing';
 viewCertificates=false;
  constructor(private dashboardService:DashboardService,private router:Router) { }

  ngOnInit(): void {
    this.courseList=[];
    this.getAllCourse();
  }
  completionStatus(data:any){
    this.course_completion_status = data;
    this.courseList=[];
    this.getAllCourse();
  }

  getAllCourse(){
this.currentCourse = sessionStorage.getItem('seeAllCourseType') || 'ongoing';

if(this.currentCourse == 'ongoing'){
  if(this.course_completion_status == 'Ongoing'){
    this.dashboardService.getCategoryData().subscribe({
      next:(data)=>{
        console.log(data);
        this.courseList = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  } else{
    this.dashboardService.getCompletedCourse().subscribe({
      next:(data)=>{
        console.log(data);
        this.courseList = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
} else if(this.currentCourse == 'choice'){
  let choice = sessionStorage.getItem('choice-course') || 'All';
  this.dashboardService.getChoiceCourse(choice).subscribe({
    next:(data)=>{
      this.courseList = data;
      console.log(this.courseList);
      
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
} else if(this.currentCourse == 'business'){
  this.dashboardService.getBusinessTopCourse("Business").subscribe({
    next:(data)=>{
this.courseList = data;
console.log(this.courseList);

    },
    error:(error)=>{
      console.log(error);
      
    }
  })
} else {
  this.dashboardService.getBusinessTopCourse("Design").subscribe({
    next:(data)=>{
this.courseList = data;
console.log(this.courseList);

    },
    error:(error)=>{
      console.log(error);
      
    }
  })
}
  }
  viewCertificate(){
    this.viewCertificates = true;
  }
  continue(id:any){
    sessionStorage.setItem('course-id',id);
    this.router.navigate(['/course-details']);
  }

}
