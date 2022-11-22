import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../../models/holiday.model';
import { HolidayService } from '../../services/holiday.service';

@Component({
  selector: 'app-holiday',
  styleUrls: ['./holiday.component.scss'],
  templateUrl: './holiday.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayComponent {
  readonly holidays$: Observable<HolidayModel[]> = this._holidayService.getAll();

  constructor(private _holidayService: HolidayService) {
  }
}
