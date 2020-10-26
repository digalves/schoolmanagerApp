import { TurmaListComponent } from './turma/components/turma-list/turma-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolaListComponent } from './escola/components/escola-list/escola-list.component';
import { EscolaRegisterComponent } from './escola/components/escola-register/escola-register.component';
import { TurmaRegisterComponent } from './turma/components/turma-register/turma-register.component';

const routes: Routes = [
  { path: '', component: EscolaListComponent },
  { path: 'cadastrar-escola', component: EscolaRegisterComponent },
  { path: 'cadastrar-turma/:id', component: TurmaRegisterComponent },
  { path: 'listar-turmas/:id', component: TurmaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
