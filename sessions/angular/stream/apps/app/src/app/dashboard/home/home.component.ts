import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stream-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  workshops$: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.workshops$ = this.http.get('./assets/workshops/workshops.json');
  }

}
