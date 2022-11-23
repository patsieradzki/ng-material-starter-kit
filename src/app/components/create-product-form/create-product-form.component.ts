import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CategoriesModel } from '../../models/categories.model';
import { CreateproductService } from '../../services/createproduct.service';
import { CategoriesService } from '../../services/categories.service';

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
  readonly categories$: Observable<CategoriesModel[]> = this._categoriesService.getAll().pipe(switchMap(data => this._categoriesService.getAll()));

  constructor(private _createproductService: CreateproductService, private _categoriesService: CategoriesService) {
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
