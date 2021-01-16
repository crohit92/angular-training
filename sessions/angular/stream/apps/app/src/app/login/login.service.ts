import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from '../../shared/models/user';
import { Credentials } from '../../shared/models/credentials';

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

  login(credentials: Credentials): Observable<User> {
    return of(this.user);
  }
}
