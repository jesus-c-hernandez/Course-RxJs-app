import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService, Lesson } from 'src/app/core';
import { LoadingGeneralService } from 'src/app/standalone';

@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.scss'],
})
export class SearchLessonsComponent {
  searchResults$: Observable<Lesson[]>;

  activeLesson: Lesson;
  isActiveLesson: boolean = false;

  private coursesService = inject(CoursesService);
  private loadingGService = inject(LoadingGeneralService);

  onSearch(search: string) {
    this.searchResults$ = this.coursesService.searchLessons(search);

    this.loadingGService
      .showLoaderUntilComplete(this.searchResults$)
      .subscribe();
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
    this.isActiveLesson = true;
  }

  onBackToSearch() {
    this.isActiveLesson = false;
  }
}
