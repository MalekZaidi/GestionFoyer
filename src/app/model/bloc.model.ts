
import { Foyer } from './foyer.model'; 
import { Chambre } from './chambre.model'; 
export interface Bloc {
    idBloc: number;
    nomBloc: string;
    capaciteBloc: number;
    foyer?: Foyer; 
    chambres?: Chambre[]; 

  getIdBloc?(): number;
  getNomBloc(): string;
  getCapaciteBloc(): number;
  getFoyer?(): Foyer;
  getChambres?(): Chambre[];


  setIdBloc?(idBloc: number): void;
  setNomBloc(nomBloc: string): void;
  setCapaciteBloc(capaciteBloc: number): void;
  setFoyer?(foyer: Foyer): void;
  setChambres?(chambres: Chambre[]): void;
}
  