import { HttpClient, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FilterPipePipe } from '../../shared/pipes/filter-pipe/filter-pipe.pipe';
import { MyIfDirective } from '../../shared/directives/my-if/my-if.directive';
import { MathFns, MathToken, MyMathFns } from '../PI-token'
@Component({
  selector: 'stream-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchString: string;
  names = [
    {
      name: "Rohit"
    }, {
      name: "Mohit"
    },
    {
      name: "Danish"
    }
  ];
  workshops$: Observable<any>;
  strapiApiBase = environment.strapiApiBase;
  values: Observable<number[]>;
  constructor(
    // private http: HttpClient,
    @Inject(HttpClient) private http: any,
    // @Inject(PI) pi: number,
    @Inject(MathToken) mathFns: MathFns,
    private readonly router: Router,
    private readonly filter: FilterPipePipe,
    // private readonly myIf: MyIfDirective
  ) {
    // this.values = new Observable((subscriber) => {
    //   console.log("subscribed to the observable");
    //   subscriber.next([1, 2, 3, 4, 5, 6, 7, 8]);
    // });
    // this.values.subscribe();
    console.log(this.filter.transform(this.names, "M"));

  }

  addRandonName() {
    this.names.push({
      name: `${Math.random() * 999999}`
    })
    this.names = Object.assign([], this.names);
  }
  ngOnInit(): void {
    this.workshops$ = this.http.get(`${environment.strapiApiBase}/workshops`)
    // .pipe(catchError((err) => {
    // console.log(err);
    // this.router.navigate(["/login"]);
    // return of([]);
    // })
    // );
  }

}
