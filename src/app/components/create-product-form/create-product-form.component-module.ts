import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesMenuComponentModule } from '../categories-menu/categories-menu.component-module';
import { CategoriesServiceModule } from '../../services/categories.service-module';
import { CreateProductFormComponent } from './create-product-form.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatListModule, FlexModule, MatSelectModule, MatOptionModule, MatMenuModule, CategoriesMenuComponentModule, CategoriesServiceModule],
  declarations: [CreateProductFormComponent],
  providers: [],
  exports: [CreateProductFormComponent]
})
export class CreateProductFormComponentModule {
}
