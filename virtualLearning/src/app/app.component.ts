import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'virtualLearning';
  currentRoute:any;
innerWidth:any;
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
    
    
    // router.events.filter(event=> event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });
    }
    getCurrentRoute(){
      this.currentRoute = this.router.url;
    }


}


