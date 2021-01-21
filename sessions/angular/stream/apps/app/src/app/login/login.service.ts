import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from '../../shared/models/user';
import { Credentials } from '../../shared/models/credentials';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User = {
    id: 1,
    name: 'Jorav',
    username: 'joravkumar',
    role: UserRole.Client
  };

  constructor(private http: HttpClient) {

  }

  login(credentials: Credentials): Observable<User> {
    return this.http.post(`${environment.apiBase}/users/login`, credentials) as Observable<User>
    // return of(this.user);
  }
}
