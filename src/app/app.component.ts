import { Component, inject } from '@angular/core';
import { AuthStore } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reactive-angular-app';

  public auth = inject(AuthStore);

  showFiller = false;

  logout() {
    this.auth.logout();
  }
}
