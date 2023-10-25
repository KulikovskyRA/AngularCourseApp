import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

import * as moment from 'moment';

@Directive({
  selector: '[appCreationDateCheck]',
})
export class CreationDateCheckDirective implements AfterViewInit {
  @Input('appCreationDateCheck') creationDate = '';

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  public ngAfterViewInit(): void {
    if (
      new Date(moment(this.creationDate, 'MM-DD-YYYY', false).format()) <
        new Date() &&
      new Date(
        moment(this.creationDate, 'MM-DD-YYYY', false).add(14, 'days').format()
      ) >= new Date()
    ) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '1px solid #22ff00');
    }

    if (
      new Date(moment(this.creationDate, 'MM-DD-YYYY', false).format()) >
      new Date()
    ) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '1px solid blue');
    }
  }
}
