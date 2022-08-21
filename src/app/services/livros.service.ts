import { Livro } from './../livro';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livro!: Livro

  constructor(
    private httpClient: HttpClient,
  ) { }

  listarTodos(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(environment.URL_API + '/livros')
  }

  // cadastrar(formData: Livro): Observable<Livro> {
  //   return this.httpClient.post<Livro>(environment.URL_API + '/livros', formData);
  // }

  // getLivro(id: number): Observable<Livro> {
  //   return this.httpClient.get<Livro>(environment.URL_API + '/livros/' + id);
  // }

  // editarLivro(id: number, formData: Livro): Observable<Livro>{
  //   return this.httpClient.put<Livro>(environment.URL_API + '/livros/' + id, formData);
  // }
}
