import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent {

  @Output() a = new EventEmitter<void>(); //Output() decorator passes value to parent tag
  @Output() b = new EventEmitter<void>(); //EventEmitter?
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();

  aClicked(): void{
    this.a.emit();
  }
  bClicked(): void{
    this.b.emit();
  }
  cClicked(): void{
    this.c.emit();
  }
  dClicked(): void{
    this.d.emit();
  }

}
