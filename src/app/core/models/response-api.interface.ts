import { Course } from './course.interface';
import { Lesson } from './lesson.interface';

export interface ResponseApiCourses {
  payload: Course[];
}

export interface ResponseApiLessons {
  payload: Lesson[];
}
