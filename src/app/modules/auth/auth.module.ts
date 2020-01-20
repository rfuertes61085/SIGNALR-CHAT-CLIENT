import { NgModule } from '@angular/core';
import { AuthContainerComponent } from './container/auth-container.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AuthService } from 'src/app/auth.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthContainerComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AuthContainerComponent, LoginComponent],
  providers: [AuthService],
  exports: [AuthContainerComponent, LoginComponent]
})
export class AuthModule { }
