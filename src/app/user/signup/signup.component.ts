import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import User from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: User = new User();

  constructor(private userService: UserService) {
  }

  onSubmit() {
    this.userService.addUser(this.model);
  }

  ngOnInit() {
  }

  // clickTest() {
  //   alert('2 SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  // }

  // onSubmit() {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  // }
}
