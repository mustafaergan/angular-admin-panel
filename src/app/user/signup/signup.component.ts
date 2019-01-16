import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import User from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  angForm: FormGroup;

  model: User = new User();

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  // createForm() {
  //   this.angForm = this.fb.group({
  //     username: ['', Validators.required],
  //     name: ['', Validators.required]
  //   });
  // }


  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  ngOnInit() {
    this.angForm = new FormGroup({
      'name': new FormControl(this.model.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }
}
