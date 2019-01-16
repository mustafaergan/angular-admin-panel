// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {UserService} from '../service/user.service';
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//
//   angForm: FormGroup;
//
//   constructor(private fb: FormBuilder, private userService: UserService) {
//     this.createForm();
//   }
//
//   createForm() {
//     this.angForm = this.fb.group({
//       username: ['', Validators.required],
//       name: ['', Validators.required]
//     });
//   }
//
//   addUser(username: string, name: string) {
//     this.userService.addUser(username, name);
//   }
//
//   ngOnInit() {
//   }
// }
