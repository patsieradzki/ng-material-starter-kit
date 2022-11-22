import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateproductModel } from '../models/createproduct.model';

@Injectable()
export class CreateproductService {
  constructor(private _httpClient: HttpClient) {
  }

  create(createproduct: Omit<CreateproductModel, 'id'>): Observable<CreateproductModel> {
    return this._httpClient.post<CreateproductModel>('https://fakestoreapi.com/products', createproduct);
  }
}
