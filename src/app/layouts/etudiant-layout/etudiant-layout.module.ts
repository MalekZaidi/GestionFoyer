import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantLayoutRoutingModule } from './etudiant-layout-routing.module';
import { EtudiantLayoutComponent } from './etudiant-layout.component';
import {FooterModule} from "../../shared/footer/footer.module";
import {NavbarModule} from "../../shared/navbar/navbar.module";
import { SidebarEtudiantComponent } from './sidebar-etudiant/sidebar-etudiant.component';
import { ReservationFormComponent } from  "app/reservation-form/reservation-form.component"
import { ReactiveFormsModule } from '@angular/forms'; // Importez ReactiveFormsModule si vous ne l'avez pas déjà



@NgModule({
  declarations: [
    EtudiantLayoutComponent,
    SidebarEtudiantComponent,
    ReservationFormComponent,
  ],
  imports: [
    CommonModule,
    EtudiantLayoutRoutingModule,
    FooterModule,
    NavbarModule,
    ReactiveFormsModule


  ],

})
export class EtudiantLayoutModule { }
