import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-course-navigation',
  templateUrl: './course-navigation.component.html',
  styleUrls: ['./course-navigation.component.css']
})
export class CourseNavigationComponent implements OnInit {
currentRoute:any;
innerWidth: any;
display=true;

@HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
  if(this.innerWidth < 700){
this.display = false;
  } else {
    this.display = true;
  }
  
}
  constructor(private router: Router){
    console.log(router.url);
    this.currentRoute = router.url;
    
    // router.events.filter(event=> event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    }

  ngOnInit(): void {
  }

}
