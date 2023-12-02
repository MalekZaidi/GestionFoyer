// reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './model/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:8083/a/reservation';

  constructor(private http: HttpClient) {}

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/allreservation`);
  }

  deleteReservation(idReservation: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idReservation}`);
  }

  ajouterReservation(idChambre: number, cin: number): Observable<Reservation> {
    const reservationData = { idChambre, cin };
    return this.http.post<Reservation>(`${this.apiUrl}/add/${idChambre}/${cin}`, reservationData);
  }

  annulerReservation(cin: number): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/annulerReservation/${cin}`, {});
  }
}
