import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'heros-tour';
  envName = environment.name;
}
