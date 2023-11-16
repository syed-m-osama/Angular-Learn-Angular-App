import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-page',
  templateUrl: './multiple-choice-page.component.html',
  styleUrls: ['./multiple-choice-page.component.css']
})
export class MultipleChoicePageComponent {

  doAThing(): void{
    alert("doing A thing...");
  }
  doBThing(): void{
    alert("doing B thing...");
  }
  doCThing(): void{
    alert("doing C thing...");
  }
  doDThing(): void{
    alert("doing D thing...");
  }


}
