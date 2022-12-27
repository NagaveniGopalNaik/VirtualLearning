import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseFilterComponent } from '../course-filter/course-filter.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
display_dropdown=false;
searchOk=false;
searchKeyData='';
searchOption=true;
searchCancel=false;
mobile_menu=false;
search_view=false;
image = "../../assets/images/illustration-in-UI.png";
  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
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
  searchKey(){
    this.searchOption = false;
    this.searchCancel = true;
    

  }
  searchCatogary(data:any){
this.searchKeyData = data;
  }
clearData(){
  this.searchKeyData='';
  this.searchOption = true;
  this.searchCancel = false;
}

filter_course(){
  let dialogRef=this.dialog.open(CourseFilterComponent,{panelClass:'course-filter'});
  // dialogRef.afterClosed();
  //   this.searchOption = true;
  // this.searchCancel = false;
  
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

gotoCourseDetails(){
  this.closeSearch();
  this.router.navigate(['/course-details']);
}
}
