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

  getAllCourses(): Observable<Course[]> {
    return this.http
      .get<ResponseApiCourses>(`${environment.API_URL}courses`)
      .pipe(
        map((resp: ResponseApiCourses) => resp.payload),
        shareReplay()
      );
  }
}
