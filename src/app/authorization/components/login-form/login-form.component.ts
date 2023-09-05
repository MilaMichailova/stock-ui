import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

interface ILoginForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm: FormGroup<ILoginForm>;

  private hasLoginErrors: boolean;

  public get isFormInvalid(): boolean {
    return this.hasLoginErrors;
  }

  public get canLogin(): boolean {
    return (
      this.loginForm.controls.login.valid &&
      this.loginForm.controls.password.valid
    );
  }

  constructor() {
    this.initLoginForm();
  }

  public login(): void {
    const loginInfo = this.loginForm.value;

    if (loginInfo.login !== 'admin') {
      this.loginForm.controls.password.reset();
      this.loginForm.controls.password.markAsTouched();
      this.hasLoginErrors = true;
    }
  }

  public clearErrors(): void {
    this.hasLoginErrors = false;
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup<ILoginForm>({
      login: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }
}
