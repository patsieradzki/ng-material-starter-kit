import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-checkbox-categories',
  styleUrls: ['./checkbox-categories.component.scss'],
  templateUrl: './checkbox-categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoriesComponent {
  readonly checkbox$: Observable<CategoriesModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
