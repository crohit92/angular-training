import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MyIfModule } from '../shared/directives/my-if/my-if-module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    MyIfModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
