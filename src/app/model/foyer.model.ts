import { Universite } from './universite.model';
import { Bloc } from './bloc.model'; 

export interface Foyer {
    idFoyer: number;
    nomFoyer: string;
    capaciteFoyer: number;
    universite?: Universite; 
    blocs?: Bloc[]; 
  
  getIdFoyer?(): number;
  getNomFoyer(): string;
  getCapaciteFoyer(): number;
  getUniversite?(): Universite;
  getBlocs?(): Bloc[];


  setIdFoyer?(idFoyer: number): void;
  setNomFoyer(nomFoyer: string): void;
  setCapaciteFoyer(capaciteFoyer: number): void;
  setUniversite?(universite: Universite): void;
  setBlocs?(blocs: Bloc[]): void;
  }
  
 
  