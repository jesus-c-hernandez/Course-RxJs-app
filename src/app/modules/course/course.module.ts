import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {
  LoadingGeneralComponent,
  LoadingGeneralService,
} from 'src/app/standalone';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, LoadingGeneralComponent],
  providers: [LoadingGeneralService],
})
export class CourseModule {}
