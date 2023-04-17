import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseCardComponent } from 'src/app/standalone';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatTabsModule, CourseCardComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
