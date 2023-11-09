import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[numberToArray]'
})
export class NumberToArrayDirective implements OnChanges {
  @Input('numberToArray') count: number=0;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    this.viewContainer.clear();
    for (let i = 1; i <= this.count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: i });
    }
  }
}
