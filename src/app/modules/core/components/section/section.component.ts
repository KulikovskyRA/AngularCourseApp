import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  value = '';
  setValue(event: any) {
    this.value = event.target.value;
  }

  logValue() {
    console.log(this.value);
  }
}
