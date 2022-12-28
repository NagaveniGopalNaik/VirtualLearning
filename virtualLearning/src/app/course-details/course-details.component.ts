import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
display_name=true;
course_details_active = true;
display_sub_chapter = false;
mobile_video_display=false;
  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
this.display_name = false;
  }
  courseDetailsOverview(){
    this.course_details_active = true;
  }

  courseDetailsChapter(){
    this.course_details_active = false;
  }
  displaySubChapter(){
    this.display_sub_chapter = !this.display_sub_chapter;
  }

  displayVideo(){
    this.mobile_video_display = true;
  }
  closeVideo(){
    this.mobile_video_display = false;
  }

}
