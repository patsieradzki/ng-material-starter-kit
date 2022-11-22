import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateproductService } from '../../services/createproduct.service';

@Component({
  selector: 'app-create-product-form',
  styleUrls: ['./create-product-form.component.scss'],
  templateUrl: './create-product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductFormComponent {
  readonly createproductform: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });

  constructor(private _createproductService: CreateproductService) {
  }

  onCreateproductformSubmitted(createproductform: FormGroup): void {
    this._createproductService.create({
      title: createproductform.get('title')?.value,
      category: createproductform.get('category')?.value,
      price: createproductform.get('price')?.value,
      description: createproductform.get('description')?.value,
      image: createproductform.get('image')?.value,
    }).subscribe();
  }
}
