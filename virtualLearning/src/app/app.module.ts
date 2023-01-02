import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { CustomInterceptor } from './custom.interceptor';
import { DurationPipe } from './duration.pipe';
import { SearchComponent } from './search/search.component';
import { CourseNavigationComponent } from './course-navigation/course-navigation.component';
import { DurationPipePipe } from './duration-pipe.pipe';
import { TotalLengthPipe } from './total-length.pipe';
import { LessonDurationPipe } from './lesson-duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    HeaderComponent,
    CourseFilterComponent,
    MobileMenuComponent,
    CourseDetailsComponent,
    MyCourseComponent,
    DurationPipe,
    SearchComponent,
    CourseNavigationComponent,
    DurationPipePipe,
    TotalLengthPipe,
    LessonDurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:CustomInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
