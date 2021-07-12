import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8080/profile';

  constructor(private http: HttpClient) { }

  getProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${12}`);
  }

  createProfile(profile: Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`,profile);
  }

  updateProfile(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${12}`, value)
  }

}
