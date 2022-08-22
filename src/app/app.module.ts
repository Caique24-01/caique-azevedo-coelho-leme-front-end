import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { CadastroAutoresComponent } from './autores/cadastro-autores/cadastro-autores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAutorComponent } from './autores/form-autor/form-autor.component';
import { MessagesComponent } from './messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageErroApiComponent } from './components/message-erro-api/message-erro-api.component';
import { AtualizarAutoresComponent } from './autores/atualizar-autores/atualizar-autores.component';
import { LivrosComponent } from './livros/livros.component';
import { CadastrarLivrosComponent } from './livros/cadastrar-livros/cadastrar-livros.component';
import { FormLivroComponent } from './livros/form-livro/form-livro.component';
import { AtualizarLivroComponent } from './livros/atualizar-livro/atualizar-livro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoresComponent,
    CadastroAutoresComponent,
    FormAutorComponent,
    MessagesComponent,
    MessageErroApiComponent,
    AtualizarAutoresComponent,
    LivrosComponent,
    CadastrarLivrosComponent,
    FormLivroComponent,
    AtualizarLivroComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
