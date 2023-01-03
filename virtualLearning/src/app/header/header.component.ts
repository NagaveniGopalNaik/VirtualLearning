import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseFilterComponent } from '../course-filter/course-filter.component';
import { DashboardService } from '../dashboard.service';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { SearchService } from '../search.service';
// import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
display_dropdown=false;
searchOk=false;
searchKeyData='';
searchOption=true;
searchCancel=false;
mobile_menu=false;
search_view=false;
userImage:any;
topSearchService:any;
nodata=false;
image = "../../assets/images/illustration-in-UI.png";
searchCategoryImage:any;
categoryData:any;
active:any
filter_active = false;
innerWidth:any;
display=true;
currentRoute:any;
dialogRef:any;
searchCourseDetails:any;
categorySelect = false;
  @HostListener('window:resize', ['$event'])
onResize(event:any) {
  
  this.innerWidth = window.innerWidth;
 
  if(this.innerWidth < 700){
this.display = false;
  } else {
    this.display = true;
  }
  
}

  constructor(private dialog:MatDialog,private router:Router,private dashboardService:DashboardService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.getUserImage();
    this.getTopSearchService();
    this.searchCategoryImage = this.dashboardService.categoryList;
    this.getCourseCategoryData();
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
    
  }

  refreshHeader(){
   if(sessionStorage.getItem('login')){
    this.getUserImage();
    this.getTopSearchService();
    this.getCourseCategoryData();
    sessionStorage.removeItem('login');
   }
  }

  displayDropDown(){
    
this.display_dropdown =true;

  }
  close(){
    this.display_dropdown = false;
  }
  myCourse(){
    this.display_dropdown=false;
    this.router.navigate(['/my-course']);
  }

  searchCourse(){
    this.searchOk = true;
  }
  closeSearch(){
    this.searchOk = false;
    this.searchCancel = false;
    this.searchOption = true;
    this.clearData();
  }

// getCourse(){
//  if(sessionStorage.getItem('search-course')){
//   this.searchCourseDetails = JSON.parse(sessionStorage.getItem('search-course') as any);
 
//  }
  
// }
// update(){
//   sessionStorage.setItem('update','true');
// }
searchKey(){
  
  this.filter_active = false;
    // this.searchCourseDetails = [];
  
let data = {
  "text":this.searchKeyData
}




if(this.searchKeyData != ""){
  this.searchService.searchCourse(data).subscribe({
    next:(data)=>{
      sessionStorage.setItem('search-course',JSON.stringify(data));
      this.searchCourseDetails = data;
      console.log(this.searchCourseDetails);
      if(this.searchCourseDetails.length < 1){
        this.searchOption = true;
        
        this.nodata = true;
          this.searchCancel = true;
      } else {
        this.nodata = false;
        this.searchOption = false;
        this.searchCancel = true;
      }
        
      
    }
  })
} else{
  this.searchOption = true;
  
  this.nodata = true;
    this.searchCancel = false;
}

if(this.searchKeyData == '' && this.filter_active == false && this.categorySelect == false){
  this.nodata = false;
  
  
}
    

  }
  searchCatogary(data:any){
    this.categorySelect = true;
    this.filter_active = false;
    // this.searchCourseDetails = [];
this.searchKeyData = data;
this.searchOption = false;
    this.searchCancel = true;
    data={
      "text":data
    }
   
    // if(this.searchKeyData != ""){
      this.searchService.searchByCategory(data).subscribe({
        next:(data)=>{
          this.searchCourseDetails = data;
          sessionStorage.setItem('search-course',JSON.stringify(data));
          if(this.searchCourseDetails.length < 1){
            this.searchOption = true;
            this.nodata = true;
            this.searchCancel = true;
          }
        }
      })
    // }
  }
clearData(){
  this.active = this.searchKeyData
  console.log(this.active);
  this.searchKeyData='';
  this.searchOption = true;
  this.searchCancel = false;
  this.categorySelect = false;
  this.nodata = false;
  // this.searchCourseDetails = [];
}
closeDialog(){
  if(sessionStorage.getItem('close-dialog')){
    let close = sessionStorage.getItem('close-dialog');
    if(close == 'true'){
this.dialogRef.close();
sessionStorage.setItem('close-dialog','false');
    }
  }
}

filter_course(){
  this.filter_active = true;
 
  this.dialogRef=this.dialog.open(CourseFilterComponent,{panelClass:'course-filter'});

  this.dialogRef.afterClosed().subscribe(()=>{
    if(sessionStorage.getItem('search-course')){
      let data = JSON.parse(sessionStorage.getItem('search-course') as any);
      console.log(data);
      
      this.searchCourseDetails = data;
     console.log(this.searchCourseDetails);
     
      if(this.searchCourseDetails.length < 1){
       
        this.nodata = true;
        this.searchOption = true;
        this.searchCancel = true;
        
      } else {
        this.searchOption = false;
        this.searchCancel = true;
        this.nodata = false;
       
      }
    } else {
      this.searchOption = true;
        this.searchCancel = true;
        this.nodata = false;
    }
    

    
  });
  // if(dialogRef.afterClosed()){
  //   let data = JSON.parse(sessionStorage.getItem('search-course') as any);
  //   if(data.length < 0){
  //     this.searchOption = true;
  //     this.searchCancel = false;
  //     this.nodata = true;
  //     console.log(this.nodata);
      
  //   }

  // }
    
  
}

gotoMenu(){
this.mobile_menu =true;
}
gotoSearch(){
this.search_view=true;
this.searchOk = true;
}
closeMenu(){
  this.search_view = false
}
closeSearchs(){
  this.search_view = false;
}

gotoCourseDetails(course:any){
  let courseId =course._id;
  let courseName:any;
  if(this.filter_active == true){
    courseName = course.title;
  } else {
    courseName = course.courseTitle;
  }
  sessionStorage.setItem('course-id',courseId);
  sessionStorage.setItem('course-name',courseName);
  sessionStorage.setItem('update','true');
  this.closeSearch();
  this.router.navigate(['/course-details']);
}

// Api call for api
getUserImage(){
  this.dashboardService.getUserImage().subscribe({
    next:(data)=>{
      this.userImage = data;

    },
    error:(error)=>{
      console.log(error);

    }
  })
 
}

getTopSearchService(){
  this.searchService.getTopSearch().subscribe({
    next:(data)=>{
      // console.log(data);
      this.topSearchService = data;
      console.log(this.topSearchService);
      
      
    }
  })
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


// backtoData(){
//   if(this.searchKeyData == ''){
//     this.nodata = false;
//   }
// }
}
