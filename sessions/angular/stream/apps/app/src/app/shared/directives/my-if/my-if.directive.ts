import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[streamMyIf]'
})
export class MyIfDirective implements OnChanges {

  @Input() streamMyIf: boolean;
  constructor(private readonly container: ViewContainerRef,
    private readonly template: TemplateRef<any>) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.streamMyIf) {
      if (changes.streamMyIf.currentValue) {
        this.container.createEmbeddedView(this.template);
      } else {
        this.container.clear();
      }
    }
  }

}
