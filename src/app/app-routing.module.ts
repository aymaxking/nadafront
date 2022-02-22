import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'compte', pathMatch: 'full'},
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), },
  //{ path: '', redirectTo: 'frontoffice', pathMatch: 'full'},
   { path: 'compte', loadChildren: () => import('./compte/compte.module').then(m => m.CompteModule), },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), },
 //{ path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule), },


  // tslint:disable-next-line:max-line-length
  //{ path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule), canActivate: [MyGuard]},
  // tslint:disable-next-line:max-line-length
  //{ path: 'utilisateur', loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule), canActivate: [MyGuard]},

 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
