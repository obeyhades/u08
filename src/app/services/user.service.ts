import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080' //'https://moneytracker-hw96.onrender.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }

  logIn(credentials: {username: string, password: string}): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>(`${this.url}/user/login`,credentials);
  }
}
