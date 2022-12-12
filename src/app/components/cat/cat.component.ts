import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {
  readonly cat$: Observable<CatModel> = this._CatService.getAll();
  constructor(private _CatService: CatService){}
}

