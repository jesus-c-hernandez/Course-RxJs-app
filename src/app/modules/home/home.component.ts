import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CoursesService,
  sortCoursesBySeqNo,
  Course,
  StoreService,
} from 'src/app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  private storeService = inject(StoreService);

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.storeService.filterByCategory('BEGINNER');
    this.advancedCourses$ = this.storeService.filterByCategory('ADVANCED');
  }
}
