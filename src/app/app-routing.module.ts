import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CourseComponent } from './modules/course';
import { SearchLessonsComponent } from './modules/search-lessons';
// import { AboutComponent } from './about/about.component'
// import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search-lessons',
    component: SearchLessonsComponent,
  },
  // {
  //   path: 'about',
  //   // component: AboutComponent,
  // },
  {
    path: 'courses/:courseId',
    component: CourseComponent,
  },
  // {
  //   path: 'login',
  //   // component: LoginComponent,
  // },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
