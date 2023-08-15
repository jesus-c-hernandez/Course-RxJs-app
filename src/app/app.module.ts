import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// * Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// * Modules
import { HomeModule } from './modules';

import {
  LoadingComponent,
  LoadingGeneralComponent,
  LoadingGeneralService,
  LoadingService,
} from './standalone';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingGeneralComponent,
    LoadingComponent,

    // * Material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,

    // * Modules
    HomeModule,
  ],
  providers: [LoadingGeneralService, LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
