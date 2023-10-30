import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Output() public valueEmit: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  setValue(event: any) {
    this.value = event.target.value;
  }

  logValue() {
    // console.log(this.value);
    this.valueEmit.emit(this.value);
  }
}
