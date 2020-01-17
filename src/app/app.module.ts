import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { SignalRNotificationService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule
    // RouterModule.forRoot(routes)
  ],
  providers: [AuthService, SignalRNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
