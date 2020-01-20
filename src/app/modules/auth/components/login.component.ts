import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUserLogin } from '../auth.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['rey'],
      password: ['p@ssword']
    });
  }

  ngOnInit() { }

  public onSubmit(): void {
    console.log(this.form.value as IUserLogin);
    this.authService.post(this.form.value, 'auth/login')
      .pipe(tap((token => localStorage.setItem('token', JSON.stringify(token)))))
      .subscribe(res => {
        if(res)
          this.router.navigateByUrl('/chat');
      })
  }
}