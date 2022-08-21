import { CadastroAutoresComponent } from './autores/cadastro-autores/cadastro-autores.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AtualizarAutoresComponent } from './autores/atualizar-autores/atualizar-autores.component';
import { LivrosComponent } from './livros/livros.component';
import { RemoverLivroComponent } from './livros/remover-livro/remover-livro.component';
import { CadastrarLivrosComponent } from './livros/cadastrar-livros/cadastrar-livros.component';

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
    path: 'livros',
    component: LivrosComponent
  },
  {
    path: 'cadastrar-autores',
    component: CadastroAutoresComponent
  },
  {
    path: 'cadastrar-livros',
    component: CadastrarLivrosComponent
  },
  {
    path: 'atualizar-autores/:id',
    component: AtualizarAutoresComponent
  },
  {
    path: 'remover-livro/:id',
    component: RemoverLivroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
