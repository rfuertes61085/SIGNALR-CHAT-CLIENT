import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(   private http: HttpClient) { }

  public getToken(): Observable<any> {
    return this.http.get(``);
  }
  
}