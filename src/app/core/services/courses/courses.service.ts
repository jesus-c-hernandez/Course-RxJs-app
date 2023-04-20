import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course, ResponseApiCourses } from '../../models';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private http = inject(HttpClient);

  saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
    return this.http
      .put(`${environment.API_URL}courses/${courseId}`, changes)
      .pipe(shareReplay());
  }
}
