import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) {
  }


  addUser(user: User) {
    const obj = {
      username: user.username,
      name: user.name,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  checkUser(model: User) {
    const obj = {
      username: model.username,
      name: model.name,
    };
    this.http.post(`${this.uri}/check`, obj)
      .subscribe(res => console.log('Done'));
  }

}
