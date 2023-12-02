import { Foyer} from './foyer.model';
export interface Universite {
    idUniversite?: number;
    nomUniversite: string;
    adresse: string;
    foyer?: Foyer; 
    
    
    getIdUniversite?(): number;
    getNomUniversite(): string;
    getAdresse(): string;
    getFoyer?(): Foyer;
  
    setIdUniversite?(idUniversite: number): void;
    setNomUniversite(nomUniversite: string): void;
    setAdresse(adresse: string): void;
    setFoyer?(foyer: Foyer): void;
  }
  