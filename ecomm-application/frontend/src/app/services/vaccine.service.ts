import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaccine } from '../models/vaccine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VaccineService {
  private vaccines: Vaccine[];
  private baseUrl = 'http://localhost:8080/api/vaccine/';

  constructor(private http:HttpClient) { }

  getVaccineList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'vaccines-list');
  }

  createVaccine(vaccine: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-vaccine', vaccine);
  }

  deleteVaccine(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}delete-vaccine/${id}`, { responseType: 'text' });
  }


  getVaccine(id: string): Observable<Vaccine> {
    return this.http.get<Vaccine>(`${this.baseUrl}${id}`);
  }

  updateVaccine(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-vaccine/${id}`, value);
  }


find(id: string): Vaccine {
    return this.vaccines[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.vaccines.length; i++) {
        if (this.vaccines[i].id == id) {
            return i;
        }
    }
    return -1;
}
  
}                                           