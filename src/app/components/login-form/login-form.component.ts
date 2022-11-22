import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  readonly login: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _loginService: LoginService) {
  }

  onLoginSubmitted(login: FormGroup): void {
    this._loginService.create({
      username: login.get('username')?.value,
      password: login.get('password')?.value,
    }).subscribe();
  }
}
