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


