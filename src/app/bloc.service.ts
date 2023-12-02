

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from './model/bloc.model'; 

@Injectable({
  providedIn: 'root',
})
export class BlocService {
  private apiUrl = 'http://localhost:8083/a/bloc';

  constructor(private http: HttpClient) {}

  getAllBloc(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/allbloc`);
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.apiUrl}/add`, bloc);
  }

  updateBloc(idBloc: number, updatedBloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/update/${idBloc}`, updatedBloc);
  }

  deleteBloc(idBloc: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${idBloc}`);
  }

  affecterChambresABloc(idChambre: number[], idBloc: number): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/affecterChambres/${idBloc}`, idChambre);
  }

  affecterBlocAFoyer(idBloc: number, idFoyer: number): Observable<Bloc> {
    return this.http.put<Bloc>(`${this.apiUrl}/affecterBlocFoyer/${idBloc}/${idFoyer}`, {});
  }
}
