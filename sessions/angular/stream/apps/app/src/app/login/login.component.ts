import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from '../../shared/models/credentials';
import { StorageService } from '../core/services/storage/storage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'stream-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  passwordVisible = false;
  credentials: Credentials;
  constructor(private readonly loginService: LoginService,
    private storage: StorageService,
    private router: Router,
    private snackbar: MatSnackBar) {
    this.credentials = new Credentials();

  }

  login() {
    this.loginService.login(this.credentials).subscribe((res: any) => {
      this.storage.set('user', res.user);
      this.storage.set('token', res.token);
      this.router.navigate(['/dashboard']);
    }, err => {
      this.snackbar.open("An Error occured", "Ok", {
        duration: 4000
      });
    })
  }

  isValid() {
    return !!this.credentials.username && !!this.credentials.password;
  }
}
