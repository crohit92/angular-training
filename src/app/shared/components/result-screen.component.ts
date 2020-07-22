import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ngt-result-screen",
  template: ` <input
    #expressionControl
    [ngModel]="model"
    (ngModelChange)="modelChange.next($event)"
    tabindex="0"
    class="screen px-2 py-4 border-0 w-full"
  />`,
})
export class ResultScreenComponent {
  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();
}
