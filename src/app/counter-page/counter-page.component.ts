import { Component } from '@angular/core';


@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  count: number = 0;

  increaseCount(): void {
    this.count += 1;
  }

}
