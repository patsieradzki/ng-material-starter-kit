import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidayComponent } from './components/holiday/holiday.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { ProductCategoriesComponentModule } from './components/product-categories/product-categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidayComponentModule } from './components/holiday/holiday.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CreateProductFormComponentModule } from './components/create-product-form/create-product-form.component-module';
import { CreateproductServiceModule } from './services/createproduct.service-module';
import { CreateemployeeComponentModule } from './components/createemployee/createemployee.component-module';
import { CreateemplooyeServiceModule } from './services/createemplooye.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: ProductCategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'holidays', component: HolidayComponent }, { path: 'checkbox', component: CheckboxCategoriesComponent }, { path: 'categoriesmenu', component: CategoriesMenuComponent }, { path: 'createproduct', component: CreateProductFormComponent }, { path: 'createemployee', component: CreateemployeeComponent }, { path: 'login', component: LoginFormComponent }]), ProductListComponentModule, ProductsServiceModule, ProductCategoriesComponentModule, CategoriesServiceModule, CryptoComponentModule, CryptoServiceModule, HolidayComponentModule, HolidayServiceModule, CheckboxCategoriesComponentModule, CategoriesMenuComponentModule, CreateProductFormComponentModule, CreateproductServiceModule, CreateemployeeComponentModule, CreateemplooyeServiceModule, LoginFormComponentModule, LoginServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
