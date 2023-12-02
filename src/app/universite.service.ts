// universite.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from './model/universite.model';

@Injectable({
  providedIn: 'root',
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8083/a/universite';

  constructor(private http: HttpClient) {}

  getAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/alluniversite`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}/add`, universite);
  }

  updateUniversite(idUniversite: number, universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/update/${idUniversite}`, universite);
  }

  deleteUniversite(idUniversite: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idUniversite}`);
  }

  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/affecterFoyer/${idFoyer}/${nomUniversite}`, {});
  }

  desaffecterFoyerAUniversite(idUniversite: number): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/desaffecterFoyer/${idUniversite}`, {});
  }

 
}
