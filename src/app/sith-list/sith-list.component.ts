import { Component } from '@angular/core';

@Component({
  selector: 'app-sith-list',
  templateUrl: './sith-list.component.html',
  styleUrls: ['./sith-list.component.css']
})
export class SithListComponent {
  
  sith = [{
    name: 'Darth Vader',
    age: 50,
    strength: 'unknown'
  },{
    name: 'Kylo Ren',
    age: 31,
    strength: '78'
  }]
}
