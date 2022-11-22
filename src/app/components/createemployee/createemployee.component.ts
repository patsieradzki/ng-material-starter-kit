import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateemplooyeService } from '../../services/createemplooye.service';

@Component({
  selector: 'app-createemployee',
  styleUrls: ['./createemployee.component.scss'],
  templateUrl: './createemployee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateemployeeComponent {
  readonly createformemployee: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl()
  });

  constructor(private _createemplooyeService: CreateemplooyeService) {
  }

  onCreateformemployeeSubmitted(createformemployee: FormGroup): void {
    this._createemplooyeService.create({
      name: createformemployee.get('name')?.value,
      salary: createformemployee.get('salary')?.value,
      age: createformemployee.get('age')?.value,
    }).subscribe();
  }
}
