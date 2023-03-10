import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavigationComponent } from './course-navigation.component';

describe('CourseNavigationComponent', () => {
  let component: CourseNavigationComponent;
  let fixture: ComponentFixture<CourseNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
