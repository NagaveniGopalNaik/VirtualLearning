import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
display_name=true;
course_details_active = true;
display_sub_chapter:any;
mobile_video_display=false;
courseDetails:any;
chapterDetails:any;
courseTitle:any;
showSubChapter :any;
watch_chapter_number:any;
  constructor(private details:DetailsService) { }

  ngOnInit(): void {
    sessionStorage.setItem('chapter-navigation','false');
    this.getCourseOverviewDetails();
    this.getCourseChapterDetails();
this.courseTitle =sessionStorage.getItem('course-name');
console.log(this.courseTitle);

  }

  courseTitleData(){
    this.courseTitle =sessionStorage.getItem('course-name');
console.log(this.courseTitle);
let update = sessionStorage.getItem('update');
if(update == 'true'){
  this.getCourseOverviewDetails();
  this.getCourseChapterDetails();
  sessionStorage.setItem('update','false');
}
  }

  playVideo(){
this.display_name = false;
  }
  courseDetailsOverview(){
    this.course_details_active = true;
    sessionStorage.setItem('chapter-navigation','false');
  }

  courseDetailsChapter(){
    sessionStorage.setItem('chapter-navigation','true');
    if(this.courseDetails.isEnrolled != null){
 this.course_details_active = false;
    } else {
      alert('Please join the course');
    }
   
  }
  displaySubChapter(chapterNumber:any){
    this.display_sub_chapter = chapterNumber;
  }
  closedisplaySubChapter(){
    this.display_sub_chapter = null;
  }

  displayVideo(){
    this.mobile_video_display = true;
  }
  closeVideo(){
    this.mobile_video_display = false;
  }

  getCourseOverviewDetails(){
this.details.getCourseOverviewDetails().subscribe({
  next:(data)=>{
    
    this.courseDetails=data;
    console.log(this.courseDetails);
    
  }
});
  }

  getCourseChapterDetails(){
    this.details.getCourseChapterDetails().subscribe({
      next:(data)=>{
        
        this.chapterDetails=data;
        this.watch_chapter_number = this.chapterDetails.isEnrolled.ongoingSerialNumber;
        console.log(this.watch_chapter_number);
        
        console.log(this.chapterDetails);
        
      }
    });
      }
    

  joinCourse(){
    
    this.details.enrollCourse().subscribe({
      next:(data)=>{
        alert(data);
        this.getCourseOverviewDetails();
        
      }
    })
  }

}
