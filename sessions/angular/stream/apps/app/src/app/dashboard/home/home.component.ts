import { HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'stream-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  workshops$: Observable<any>;
  constructor(private http: HttpClient,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.workshops$ = this.http.get(`${environment.apiBase}/workshops`).pipe(catchError(() => {
      this.router.navigate(["/login"]);
      return of([]);
    }));
  }

}
