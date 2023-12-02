import { Reservation } from './reservation.model'; 
export interface Etudiant {
    idEtudiant?: number;
    nomEt: string;
    prenomEt: string;
    cin: number;
    ecole: string;
    dateNaissance: Date;
    reservations?: Reservation[]; 

    getIdEtudiant?(): number;
    getNomEt(): string;
    getPrenomEt(): string;
    getCin(): number;
    getEcole(): string;
    getDateNaissance(): Date;
    getReservations?(): Reservation[];
  

    setIdEtudiant?(idEtudiant: number): void;
    setNomEt(nomEt: string): void;
    setPrenomEt(prenomEt: string): void;
    setCin(cin: number): void;
    setEcole(ecole: string): void;
    setDateNaissance(dateNaissance: Date): void;
    setReservations?(reservations: Reservation[]): void;
  }
  
  