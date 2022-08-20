import { CadastroAutoresComponent } from './autores/cadastro-autores/cadastro-autores.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AtualizarAutoresComponent } from './autores/atualizar-autores/atualizar-autores.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'autores',
    component: AutoresComponent
  },
  {
    path: 'cadastrar-autores',
    component: CadastroAutoresComponent
  },
  {
    path: 'atualizar-autores/:id',
    component: AtualizarAutoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
