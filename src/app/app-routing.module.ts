import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoriesComponentModule } from './components/product-categories/product-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidayComponentModule } from './components/holiday/holiday.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: ProductCategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'holidays', component: HolidayComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoriesComponentModule, CategoriesServiceModule, CryptoComponentModule, CryptoServiceModule, HolidayComponentModule, HolidayServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
