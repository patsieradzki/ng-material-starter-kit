import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HolidayComponent } from './holiday.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, MatGridListModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  declarations: [HolidayComponent],
  providers: [],
  exports: [HolidayComponent]
})
export class HolidayComponentModule {
}
