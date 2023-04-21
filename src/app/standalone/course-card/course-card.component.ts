import { Component, Input, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';

import { CourseDialogComponent } from '../course-dialog';

import { Course } from 'src/app/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
})
export class CourseCardComponent {
  @Input()
  course: Course;

  private dialog = inject(MatDialog);
  private router = inject(Router);

  viewDetailCourse({ id }: Course) {
    this.router.navigate(['/courses', id]);
  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = course;
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
