import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
course:any[]=[];
duration:any[]=[];
categoryData:any;
activecategory:any;
image:any;
index:any[]=[];
  constructor(private dashboardService:DashboardService,private search:SearchService) { }

  ngOnInit(): void {
    this. getCourseCategoryData();
    this.image = this.dashboardService.categoryList;
  }
  selectCourse(data:any){
    this.course.push(data);
    console.log(this.course);
    this.activecategory = this.course;
    // console.log(this.course.includes(data));
    
    
  }
  selectDuration(data:any,i:any){
    this.duration.push(data);
    console.log(this.duration);
    this.index.push(i);
  }

  clearSelectData(){
    
    this.course = [];
    this.duration = [];
  }

  getCourseCategoryData(){
    this.dashboardService.getCourseCategory().subscribe({
      next:(data)=>{
        console.log(data);
       this.categoryData = data;
        
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  filterCourse(){
    let data = {
      "categories":this.course,
      "totalDuration":this.duration
    }
    this.search.filter(data).subscribe({
      next:(data)=>{
        console.log(data);
        sessionStorage.setItem('search-course',JSON.stringify(data));
        
      }
    })
    
  }

}
