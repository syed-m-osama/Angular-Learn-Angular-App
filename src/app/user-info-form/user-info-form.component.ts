import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent {

  name: string = "";
  age: string = "";
  haircolor: string = "";

  displayValues(): void{
    alert(`Name is ${this.name}, Age is ${this.age}, Hair color is ${this.haircolor}`);
  }
}
