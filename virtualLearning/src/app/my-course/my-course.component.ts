import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {
course_completion_status='Ongoing';
  constructor() { }

  ngOnInit(): void {
  }
  completionStatus(data:any){
    this.course_completion_status = data;
  }

}
