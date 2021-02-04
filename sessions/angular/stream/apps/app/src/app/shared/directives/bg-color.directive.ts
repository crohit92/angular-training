import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[streamBgColor]'
})
export class BgColorDirective implements AfterViewInit {

  @Input() color: string;
  @Input() routeSegments: any[];
  constructor(private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
    this.renderer.listen(this.el.nativeElement, "click", () => {
      if (this.routeSegments) {
        this.router.navigate(this.routeSegments, {
          relativeTo: this.route
        });
      }
    });
  }
}
