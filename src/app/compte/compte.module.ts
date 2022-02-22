import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeCompteComponent } from './liste-compte/liste-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompteComponent } from './compte.component';
import { CompteRoutingModule } from './compte-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListeCompteComponent,
    AddCompteComponent,
    DetailsCompteComponent,
    DashboardComponent,
    CompteComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CompteRoutingModule
  ]
})
export class CompteModule { }
