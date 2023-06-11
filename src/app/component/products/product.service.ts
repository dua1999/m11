import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { APP_SETTINGS } from '../../app.token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static getProduct(id: any, number: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient , @Inject(APP_SETTINGS) private appSettings: any) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) =>{
      return res
    }))
  }


}
