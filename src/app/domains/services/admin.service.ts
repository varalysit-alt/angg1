import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../modules/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly API_URL = '/api/admins'; 

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]> {
    return this.http.get<{ok: boolean, admins: Admin[]}>(this.API_URL).pipe(
      map(response => response.admins)
    );
  }

  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.API_URL}/${id}`);
  }

  createAdmin(adminData: Partial<Admin> & {admin_password: string}): Observable<Admin> {
    return this.http.post<Admin>(this.API_URL, adminData);
  }

  updateAdmin(id: number, changes: Partial<Admin>): Observable<Admin> {
    return this.http.patch<Admin>(`${this.API_URL}/${id}`, changes);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}