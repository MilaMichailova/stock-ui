import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public login(): void {
    console.log('меня отправили!');
  }

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      login: [' ', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // isControlInvalid(controlName: string): boolean {
  //   const control = this.loginForm.controls[controlName];

  //   const result = control.invalid && control.touched;

  //   return result;
  // }

  submit() {
    console.log(this.loginForm);
  }
}
