import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from "./core/services/messages.service"
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          redirectTo: "dashboard",
          pathMatch: "full"
        },
        {
          path: "dashboard",
          component: DashboardComponent
        },
        {
          path: "heroes",
          component: HerosComponent,
        },
        {
          path: "heroes/:id",
          component: HeroDetailsComponent
        }
      ]
      // [
      // {
      //   path: "",
      //   component: AppComponent,
      //   children: [
      //     {
      //       path: "",
      //       component: HerosComponent
      //     },
      //     {
      //       path: ":id",
      //       component: HeroDetailsComponent
      //     }
      //   ]
      // },

      // ]
    ),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


