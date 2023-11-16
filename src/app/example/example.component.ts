import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  @Input() name: string = ""; //we declare variable with @Input() decorator to use in our component
  @Input() age: string = "";
  @Input() strength: string = "";

}
