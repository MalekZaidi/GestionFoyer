import { Reservation } from "./reservation.model";
import { Bloc } from "./bloc.model";


export interface Chambre {
    idChambre?: number;
    numeroChambre: number;
    typeC: TypeChambre; 
    bloc: { idBloc: number }; 
    reservations?: Reservation[]; 
  
  
  
    getIdChambre?(): number;
    getNumeroChambre(): number;
    getTypeC(): string;
    getBloc?(): Bloc;
    getReservation?(): Reservation[];
  
    // Setters
    setIdChambre?(idChambre: number): void;
    setNumeroChambre(numeroChambre: number): void;
    setTypeC(typeC: string): void;
    setBloc?(bloc: Bloc): void;
    setReservation?(reservations: Reservation[]): void;
  
  
  
  }
  export enum TypeChambre {
   
    SIMPLE = 'SIMPLE',
    DOUBLE = 'DOUBLE',
    TRIPLE = 'TRIPLE'
  }