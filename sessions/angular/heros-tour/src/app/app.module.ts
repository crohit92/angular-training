import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from "./core/services/messages.service"
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HerosComponent
        },
        {
          path: "this-is-funny",
          component: HerosComponent
        },
        {
          path: ":id",
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
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


