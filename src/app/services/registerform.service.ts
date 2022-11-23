import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterformModel } from '../models/registerform.model';

@Injectable()
export class RegisterformService {
  constructor(private _httpClient: HttpClient) {
  }

  createe(registerformmodel: Omit<RegisterformModel, 'id'>): Observable<RegisterformModel> {
    return this._httpClient.post<RegisterformModel>('https://fakestoreapi.com/users', registerformmodel);
  }
}
