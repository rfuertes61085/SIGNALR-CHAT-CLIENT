import { NgModule } from '@angular/core';
import { AuthContainerComponent } from './container/auth-container.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AuthContainerComponent, LoginComponent],
  providers: [],
  exports: [AuthContainerComponent, LoginComponent]
})
export class AuthModule { }
