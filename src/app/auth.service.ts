import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './modules/base.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService<any> {
  constructor(public http: HttpClient) {
    super(http);
  }

}