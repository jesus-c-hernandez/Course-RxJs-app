import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reactive-angular-course-app';

  showFiller = false;

  logout() {
    // this.auth.logout();
  }
}
