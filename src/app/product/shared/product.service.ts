import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productClass = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public getProductList(): Observable<any> {
    const header = new HttpHeaders({
      'cache-control': 'no-cache',
      'x-apikey': 'f1c50b504d02d5c027078b18e86340bbf583c',
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get(`${environment.baseUrl}rest/products`, { headers: header });
  }
}
