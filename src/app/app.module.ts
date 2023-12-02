// app.module.ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from "./layouts/admin-layout/admin-layout.module";
import { EtudiantComponent } from './etudiant/etudiant.component';
// Import ReservationFormComponent dans le module principal (AppModule)
// Ne le déclarez pas ici, cela sera géré dans EtudiantLayoutModule
// import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminLayoutModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EtudiantComponent,
    // Retirez la déclaration de ReservationFormComponent d'ici
    // ReservationFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
