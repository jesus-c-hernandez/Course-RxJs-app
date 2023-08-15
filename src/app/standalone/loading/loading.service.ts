import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  concatMap,
  finalize,
  of,
  tap,
} from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoaderUntilComplete<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => obs$),
      finalize(() => this.loadingOff())
    );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }
}
