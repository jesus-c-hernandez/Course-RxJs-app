import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { Course, ResponseApiCourses, sortCoursesBySeqNo } from '../../models';
import { HttpClient } from '@angular/common/http';
import { LoadingGeneralService } from 'src/app/standalone';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private subject = new BehaviorSubject<Course[]>([]);

  courses$: Observable<Course[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loadingGService: LoadingGeneralService // private messagesService: MessagesService
  ) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    const loadCourses$ = this.http
      .get<ResponseApiCourses>(`${environment.API_URL}courses`)
      .pipe(
        map((resp: ResponseApiCourses) => resp.payload),
        catchError((err) => {
          const message = 'Could not load courses.';
          // this.messagesService.showErrors(message);
          console.log(message, err);
          return throwError(err);
        }),
        tap((courses) => this.subject.next(courses))
      );

    this.loadingGService.showLoaderUntilComplete(loadCourses$).subscribe();
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    const courses = this.subject.getValue();

    const index = courses.findIndex((course) => course.id === courseId);

    const newCourse = {
      ...courses[index],
      ...changes,
    };

    const newCourses: Course[] = courses.slice(0);

    newCourses[index] = newCourse;

    this.subject.next(newCourses);

    return this.http
      .put(`${environment.API_URL}courses/${courseId}`, changes)
      .pipe(
        catchError((err) => {
          const message = 'Could not save course';
          console.log(message, err);
          // this.messagesService.showErrors(message);
          return throwError(err);
        }),
        shareReplay()
      );
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map((courses) =>
        courses
          .filter((course) => course.category === category)
          .sort(sortCoursesBySeqNo)
      )
    );
  }
}
