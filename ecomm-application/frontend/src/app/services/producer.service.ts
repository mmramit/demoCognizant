import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProducerService {

  private baseUrl = 'http://localhost:8080/api/producer/';

  constructor(private http:HttpClient) { }

  getProducerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'producers-list');
  }

  createProducer(producer: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-producer', producer);
  }

  deleteProducer(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}delete-producer/${id}`, { responseType: 'text' });
  }


  getProducer(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  updateProducer(id: String, name: String): Observable<Object> {
    console.log(`${this.baseUrl}update-producer?id=${id}&name=${name}`);
    return this.http.post(`${this.baseUrl}update-producer?id=${id}&name=${name}`, name);
  }
  
}
                                    