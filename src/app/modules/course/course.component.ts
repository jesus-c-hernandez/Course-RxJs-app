import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, map, startWith, tap } from 'rxjs';
import { Course, CoursesService, Lesson } from 'src/app/core';
import { LoadingGeneralService } from 'src/app/standalone';

interface CourseData {
  course: Course;
  lessons: Lesson[];
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  data$: Observable<CourseData>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private loadingGService: LoadingGeneralService
  ) {}

  ngOnInit() {
    const courseId = parseInt(this.getCourseId());

    const course$ = this.coursesService
      .loadCourseById(courseId)
      .pipe(startWith({}));

    const lessons$ = this.coursesService
      .loadAllCourseLessons(courseId)
      .pipe(startWith([]));

    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => {
        return {
          course,
          lessons,
        };
      }),
      tap(console.log)
    );

    this.loadingGService.showLoaderUntilComplete(this.data$).subscribe();
  }

  getCourseId() {
    return this.route.snapshot.paramMap.get('courseId') || '';
  }
}
