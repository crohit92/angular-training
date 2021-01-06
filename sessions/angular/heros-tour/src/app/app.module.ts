import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent, Test } from './heros/heros.component';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from "./core/services/messages.service"
import { environment } from 'src/environments/environment';
import { Forecast } from './core/services/forecast/forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: Test,
    useClass: environment.production ? MessagesService : Forecast
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


