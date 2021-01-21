import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../core/services/storage/storage.service';

@Component({
  selector: 'stream-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private storage: StorageService,
    private router: Router) { }


  ngOnInit(): void {
  }

  logout() {
    this.storage.clear();
    this.router.navigate(["/login"]);
  }
}
