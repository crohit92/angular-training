import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MessagesService } from "../core/services/messages.service";
import { Hero } from "../heros/hero";
import { HeroesService } from "../heros/heroes.service";

@Component({
  selector: "app-hero-details",
  template: `
  <div *ngIf="!!hero">
    <h1>Edit Hero</h1>
    <div class="editor">
      <div class="editor__hero--id">
        <input [(ngModel)]="hero.id">
      </div>
      <div class="editor__hero--name">
        <input (change)="onHeroNameChange()" [(ngModel)]="hero.name">
      </div>
    </div>
  </div>
  <input placeholder="Change Hero ID" #updatedHeroIdEl (change)="changeHeroId(updatedHeroIdEl.value)">
  `,
  styles: [
    `
    .editor {
      display: flex;
    }
    input {
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid grey;
    }
    `
  ],
  providers: [MessagesService, HeroesService]
})
export class HeroDetailsComponent {
  hero: Hero;
  constructor(public messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private herosService: HeroesService) {

    this.herosService.getHero(this.route.snapshot.params.id).subscribe(hero => {
      this.hero = hero;
    });
    this.route.paramMap.subscribe(params => {
      this.herosService.getHero(params.get("id")).subscribe(hero => {
        this.hero = hero;
      })
    })
    // this.herosService.getHero(this.route.snapshot.queryParams.id).subscribe(hero => {
    //   this.hero = hero;
    // });
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get("name"));
    })
  }

  onHeroNameChange() {
    this.messagesService.add(`Name of the hero changed to: ${this.hero.name}`);
  }

  changeHeroId(id: string) {
    if (id) {
      this.router.navigate(["../", id], {
        relativeTo: this.route,
        queryParams: {
          name: (Math.random() * 1000) + id
        }
      });
    }
  }
}
