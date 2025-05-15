import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  }

  export interface UserExpenses {
   userId: string;
   amount: number;
   category: string;
   description: string;

    }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.serverurl;
  
  private userId = new BehaviorSubject<number>(0)
  userId$ = this.userId.asObservable();
  constructor(private http: HttpClient) { }
  
  setUserId(id: number) {
    this.userId.next(id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }

  getUserExpenses (userId:string): Observable<UserExpenses[]> {
    return this.http.get<UserExpenses[]>(`${this.url}/expense/${userId}`)
  }

  logIn(credentials: {username: string, password: string}): Observable<{accessToken: string, user_id: number}> {
    return this.http.post<{accessToken: string, user_id: number}>(`${this.url}/user/login`,credentials);
  }

  register(credentials: {username: string, email: string, password: string}): Observable<{user: User}> {
    return this.http.post<{user: User}>(`${this.url}/user`,credentials);
  }

  deleteUser (userId: string): Observable<{user: User}> {
    return this.http.delete<{user: User}>(`${this.url}/user/${userId}`);
  }

  updateUser(credentials: {username: string, email: string, password: string}, userId: string): Observable<{user: User}> {
      return this.http.put<{user: User}>(`${this.url}/user/${userId}`, credentials);
  }
}
