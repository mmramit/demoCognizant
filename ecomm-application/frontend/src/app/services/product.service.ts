import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from '../models/vaccine';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private baseUrl = 'http://localhost:8080/api/product-item/';

  constructor(private http:HttpClient) { }


  getVaccine(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`);
  }


  
}                                           