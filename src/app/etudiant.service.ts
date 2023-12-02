// etudiant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from './model/etudiant.model';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8083/a/etudiant';

  constructor(private http: HttpClient) {}

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/alletudiant`);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.apiUrl}/add`, etudiant);
  }

  updateEtudiant(idEtudiant: number, etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/update/${idEtudiant}`, etudiant);
  }

  deleteEtudiant(idEtudiant: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idEtudiant}`);
  }
}
