import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = '/api';

  constructor() { }

  getHelloMessage(): Observable<{ data: string }> {
    return this.http.get<{ data: string }>(`${this.apiUrl}/hello`);
  }

  getApiStatus(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/status`);
  }
}
