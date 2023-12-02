import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from './model/chambre.model';

@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://localhost:8083/a/chambre';

  constructor(private http: HttpClient) {}
  getChambresDisponibles(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/allchambre`);
  }
  getAllChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/allchambre`);
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/add`, chambre);
  }

  updateChambre(idChambre: number, chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/update/${idChambre}`, chambre);
  }

  deleteChambre(idChambre: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idChambre}`);
  }

  // Ajoutez d'autres méthodes en fonction des besoins (ex. getChambreById, etc.)
}