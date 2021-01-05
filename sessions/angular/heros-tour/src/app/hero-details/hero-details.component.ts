import { Component, Input } from "@angular/core";
import { Hero } from "../heros/hero";

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
        <input [(ngModel)]="hero.name">
      </div>
    </div>
  </div>
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
  ]
})
export class HeroDetailsComponent {
  @Input() hero: Hero;
}
