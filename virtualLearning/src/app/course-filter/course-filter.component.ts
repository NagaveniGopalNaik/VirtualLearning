import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
course:any;
duration:any;
  constructor() { }

  ngOnInit(): void {
  }
  selectCourse(data:any){
    this.course = data;
  }
  selectDuration(data:any){
    this.duration =data;
  }

  clearSelectData(){
    this.course = '';
    this.duration = '';
  }

}
