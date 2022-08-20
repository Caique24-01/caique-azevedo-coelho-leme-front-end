//import { Response } from './../response';
import { environment } from './../../environments/environment';
import { Autor } from 'src/app/autor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../response';



@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  autor!: Autor

  constructor(
    private httpClient: HttpClient,
  ) { }

  listarTodos(): Observable<Autor[]> {
    return this.httpClient.get<Autor[]>(environment.URL_API + '/autores');
  }

  cadastrar(formData: Autor): Observable<Autor> {
    return this.httpClient.post<Autor>(environment.URL_API + '/autores', formData);
  }

  getAutor(id: number): Observable<Autor> {
    return this.httpClient.get<Autor>(environment.URL_API + '/autores/' + id);
  }

  editarAutor(id: number, formData: Autor): Observable<Autor>{
    return this.httpClient.put<Autor>(environment.URL_API + '/autores/' + id, formData);
  }
}
