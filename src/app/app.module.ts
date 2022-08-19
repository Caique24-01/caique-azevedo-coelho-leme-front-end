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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoresComponent,
    CadastroAutoresComponent,
    FormAutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
