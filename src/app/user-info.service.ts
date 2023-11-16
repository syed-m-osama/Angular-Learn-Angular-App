import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor( private http: HttpClient ) {}

  loadData(): Observable<any> {
   return this.http.get<any>('https://randomuser.me/api/').pipe(
    map(data => {
      return data.results[0];
    }),
    map(rawData => {
      return {
        name: rawData.name.first + " " + rawData.name.last,
        email: rawData.email
    }})
   )
    
  }
}
