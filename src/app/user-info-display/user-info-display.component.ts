import { Component } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent {

  isLoading: boolean = true;
  info: any = {};

  constructor(
    private userInfo: UserInfoService //user-info service getting injected
  ) {}

  ngOnInit(): void{
    this.userInfo.loadData()
    .subscribe(data => {
      // console.log(data.results[0]);
      console.log(data);
      // this.info = data.results[0];
      this.info = data;
      this.isLoading = false; //should be in subscribe body as it is asynchronous
    });
      
  }
}
