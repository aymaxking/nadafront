import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CompteComponent } from './compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';
import { ListeCompteComponent } from './liste-compte/liste-compte.component';


const routes: Routes = [
  {
    path: '',
    component: CompteComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddCompteComponent },
      { path: 'details', component: DetailsCompteComponent },
      { path: 'list', component: ListeCompteComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteRoutingModule {}
