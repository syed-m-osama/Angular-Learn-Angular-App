import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  @Input() count: number = 0; //we initialised count to 0 just in case we do not recieve value from parent component, no errors will be thrown

  @Output() buttonClicked = new EventEmitter<void>();

  pointerIcon = faHandPointer;

  onClick(): void{
    this.buttonClicked.emit(); //emit(), NOT emit as its a method not property
  }


  

}
