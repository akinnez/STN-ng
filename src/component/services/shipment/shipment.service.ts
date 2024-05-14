import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  constructor() {}

  realtimeTracking(value: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'tracking/realtime', value);
  }
  carrierAutodetection(value: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/carriers/detect', value);
  }
  createTracking(value: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'tracking/create', value);
  }
}
