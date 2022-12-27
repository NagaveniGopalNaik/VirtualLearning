import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
choice_course:any;
new_course_pagination:any;
  constructor() { }

  ngOnInit(): void {
  }
  choiceYourCourse(data:String){
    this.choice_course = data;
  }
  newCoursePagination(data:any){
    this.new_course_pagination = data;
  }

}
