import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLessonsComponent } from './search-lessons.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LessonComponent } from 'src/app/standalone/lesson';
import {
  LoadingGeneralComponent,
  LoadingGeneralService,
} from 'src/app/standalone';

@NgModule({
  declarations: [SearchLessonsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    LessonComponent,
    LoadingGeneralComponent,
  ],
  providers: [LoadingGeneralService],
})
export class SearchLessonsModule {}
