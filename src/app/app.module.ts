import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { countryService } from './services/countryService';
import { FormsModule } from '@angular/forms';
import { patientService } from './services/patientService';

const appRoutes:Routes=[
{path:'',component:NewPatientComponent},
{path:'patientList',component:PatientListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [countryService,patientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
