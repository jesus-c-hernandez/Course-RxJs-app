import { Component, inject } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingGeneralService } from './loading-general.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-loading-general',
  templateUrl: './loading-general.component.html',
  styleUrls: ['./loading-general.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class LoadingGeneralComponent {
  waitTime: number = 30;

  constructor(public loadingGService: LoadingGeneralService) {
    setTimeout(() => {
      this.waitTime = this.waitTime - 1;
    }, 1000);
  }
}
