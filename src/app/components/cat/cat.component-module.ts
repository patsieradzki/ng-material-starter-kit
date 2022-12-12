import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CatComponent } from './cat.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatCardModule, MatChipsModule],
  declarations: [CatComponent],
  providers: [],
  exports: [CatComponent]
})
export class CatComponentModule {
}
