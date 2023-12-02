import { Etudiant } from './etudiant.model';

export interface Reservation {
  idReservation?: number;
  numReservation: string;
  debutAnneeUniv: Date;
  finAnneeUniv: Date;
  estValide: boolean;
  etudiants?: Etudiant[]; 


  getIdReservation?(): number;
  getDebutAnneeUniv(): number;
  getFinAnneeUniv(): number;
  getEstValide(): boolean;
  getNumReservation(): number;
  getEtudiants?(): Etudiant[];


  setIdReservation?(idReservation: number): void;
  setDebutAnneeUniv(debutAnneeUniv: number): void;
  setFinAnneeUniv(finAnneeUniv: number): void;
  setEstValide(estValide: boolean): void;
  setNumReservation(numReservation: number): void;
  setEtudiants?(etudiants: Etudiant[]): void;
}
