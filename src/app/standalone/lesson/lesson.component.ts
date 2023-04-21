import { Component, Input, inject } from '@angular/core';
import { Lesson, SafeUrlPipe } from 'src/app/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson',
  standalone: true,
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
  imports: [],
})
export class LessonComponent {
  @Input()
  lesson: Lesson;

  private sanitizer = inject(DomSanitizer);

  safeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}`);
  }
}
