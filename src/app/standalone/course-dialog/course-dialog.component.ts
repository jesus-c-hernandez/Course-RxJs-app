import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogModule,
} from '@angular/material/dialog';
import { Course, CoursesService, StoreService } from 'src/app/core';

@Component({
  standalone: true,
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CourseDialogComponent {
  form: FormGroup;

  course: Course;

  constructor(
    fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private storeService: StoreService
  ) {
    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  save() {
    const changes = this.form.value;

    this.dialogRef.close(changes);

    this.storeService.saveCourse(this.course.id, changes).subscribe();
  }

  close() {
    this.dialogRef.close();
  }
}
