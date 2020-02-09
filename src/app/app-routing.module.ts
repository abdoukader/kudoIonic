import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },


  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'kudo', loadChildren: './pages/kudo/kudo.module#KudoPageModule'},
  { path: 'inscription',loadChildren: './pages/inscription/inscription.module#InscriptionPageModule'},
  { path: 'typeKudo',loadChildren: './pages/TypeKudo/typeKudo.module#TypeKudoPageModule'},
  {
    path: 'choix-beneficiaire',
    loadChildren: () => import('./choix-beneficiaire/choix-beneficiaire.module').then( m => m.ChoixBeneficiairePageModule)
  }

   
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}