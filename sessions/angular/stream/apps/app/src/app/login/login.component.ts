import { Component } from '@angular/core';
import { Credentials } from '../../shared/models/credentials';
import { LoginService } from './login.service';

@Component({
  selector: 'stream-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordVisible = false;
  credentials: Credentials;
  constructor(private readonly loginService: LoginService) {
    this.credentials = new Credentials();

  }

  login() {
    this.loginService.login(this.credentials).subscribe((user) => {
      // todo;
      console.log(user)
    })
  }

  isValid() {
    return !!this.credentials.username && !!this.credentials.password;
  }
}
