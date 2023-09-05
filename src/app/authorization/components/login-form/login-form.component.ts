import { Component, ErrorHandler, afterNextRender } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ILoginInfo } from '../../models/login-info';
import { catchError, map, of, pipe, tap } from 'rxjs';
import { Router } from '@angular/router';

interface ILoginForm {
  userName: FormControl<string | null>;
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
      this.loginForm.controls.userName.valid &&
      this.loginForm.controls.password.valid
    );
  }

  constructor(private loginService: LoginService, private router: Router) {
    this.initLoginForm();
  }

  public goHome() {
    // this.router.navigate(['/dashboard']);
    this.router.navigate(['']);
  }

  public login(): void {
    this.loginService
      .login(this.loginForm.value as ILoginInfo)
      .pipe(
        tap(() => console.log('Ok')),
        tap((result) => this.goHome()),
        catchError((error) => {
          this.loginForm.controls.password.reset();
          this.loginForm.controls.password.markAsTouched();
          this.hasLoginErrors = true;
          return of();
        })
      )
      .subscribe();
  }

  public clearErrors(): void {
    this.hasLoginErrors = false;
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup<ILoginForm>({
      userName: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }
}
