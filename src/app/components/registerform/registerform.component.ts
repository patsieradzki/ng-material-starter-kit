import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterformService } from '../../services/registerform.service';

@Component({
  selector: 'app-registerform',
  styleUrls: ['./registerform.component.scss'],
  templateUrl: './registerform.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterformComponent {
  readonly register: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    lat: new FormControl(),
    long: new FormControl(),
    phone: new FormControl(),
  })

  constructor(private _registerformService: RegisterformService) {
  }

  onRegisterSubmitted(register: FormGroup): void {
    this._registerformService.createe({
      email: register.get('email')?.value,
      username: register.get('username')?.value,
      password: register.get('password')?.value,
      firstname: register.get('firstname')?.value,
      lastname: register.get('lastname')?.value,
      city: register.get('city')?.value,
      street: register.get('street')?.value,
      number: register.get('number')?.value,
      zipcode: register.get('zipcode')?.value,
      lat: register.get('lat')?.value,
      long: register.get('long')?.value,
      phone: register.get('phone')?.value
    }).subscribe();
  }
}
