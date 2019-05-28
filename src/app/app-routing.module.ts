import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BibliotecaUtilitariosComponent } from './biblioteca-utilitarios/biblioteca-utilitarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/biblioteca-utilitarios', pathMatch: 'full' },
  { path: 'biblioteca-utilitarios', component: BibliotecaUtilitariosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
