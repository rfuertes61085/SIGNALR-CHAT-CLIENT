import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './modules/base.service';
import { IUserLogin } from './modules/auth/auth.model';

@Injectable({ providedIn: 'root' })
export class ChatSrv extends BaseService<any> {
  constructor(public http: HttpClient) {
    super(http);
  }

}