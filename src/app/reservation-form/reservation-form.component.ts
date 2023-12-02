
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { ReservationService } from '../reservation.service';
import { ChambreService } from '../chambre.service';
import { Etudiant } from '../model/etudiant.model';
import { Chambre } from '../model/chambre.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  etudiants: Etudiant[] = [];
  chambresDisponibles: Chambre[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService,
    private reservationService: ReservationService,
    private chambreService: ChambreService
 ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadChambresDisponibles();
  }

  initForm() {
    this.reservationForm = this.formBuilder.group({
      chambre: [null, Validators.required],
      cinEtudiant: [null, Validators.required],
    });
  }



loadChambresDisponibles() {
  this.chambreService.getAllChambres().subscribe(
    (chambres) => {
      console.log('Chambres récupérées avec succès :', chambres);
      this.chambresDisponibles = chambres;
    },
    (error) => {
      console.error('Erreur lors de la récupération des chambres disponibles :', error);
    }
  );
}
  onSubmit() {
    if (this.reservationForm.valid) {
      const selectedChambre: Chambre = this.reservationForm.value.chambre;
      const cinEtudiant = this.reservationForm.value.cinEtudiant;

      
      this.reservationService
        .ajouterReservation(selectedChambre.idChambre, cinEtudiant)
        .subscribe(
          (reservation) => {
            console.log('Réservation réussie :', reservation);
          },
          (error) => {
            console.error('Erreur lors de la réservation :', error);
          }
        );
    }
  }
}