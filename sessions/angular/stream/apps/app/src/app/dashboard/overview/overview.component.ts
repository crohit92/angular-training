import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'stream-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  workshop: any;
  destroy$ = new Subject();
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnDestroy(): void {

    if (!this.destroy$.closed) {
      this.destroy$.next({});
      this.destroy$.complete();
      this.destroy$.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.http.get('./assets/workshops/workshops.json').pipe(
        takeUntil(this.destroy$),
        map((workshops: any[]) => {
          return workshops.find(w => `${w.id}` === params.get('id'));
        }))
        .subscribe((workshop => {
          // document.getElementById('videoContainer').innerHTML = workshop.videoEmbed;
          workshop.videoEmbed = this.sanitizer.bypassSecurityTrustHtml(workshop.videoEmbed);
          this.workshop = workshop;
        }));

    })

    // const s = new Subject();

    // const ob = new Observable((subscriber) => {
    //   subscriber.next(10);
    //   subscriber.next(11);
    //   subscriber.next(12);
    //   subscriber.next(13);
    //   // subscriber.complete();
    //   // subscriber.unsubscribe();
    // });

    // ob.subscribe((value) => { console.log(value) });
  }

}
