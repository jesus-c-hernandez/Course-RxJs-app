import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  Course,
  Lesson,
  ResponseApiCourses,
  ResponseApiLessons,
} from '../../models';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private http = inject(HttpClient);

  loadCourseById(courseId: number) {
    return this.http
      .get<Course>(`${environment.API_URL}courses/${courseId}`)
      .pipe(shareReplay());
  }

  loadAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http
      .get<ResponseApiLessons>(`${environment.API_URL}lessons`, {
        params: {
          pageSize: '10000',
          courseId: courseId.toString(),
        },
      })
      .pipe(
        map((res: ResponseApiLessons) => res.payload),
        shareReplay()
      );
  }

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http
      .put(`${environment.API_URL}courses/${courseId}`, changes)
      .pipe(shareReplay());
  }

  searchLessons(search: string): Observable<Lesson[]> {
    return this.http
      .get<ResponseApiLessons>(`${environment.API_URL}lessons`, {
        params: {
          filter: search,
          pageSize: '100',
        },
      })
      .pipe(
        map((res: ResponseApiLessons) => res.payload),
        shareReplay()
      );
  }
}
