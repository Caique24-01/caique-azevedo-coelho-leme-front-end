import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Array<Livro> = new Array();

  erroRequisicao: Boolean = false;
  mensagemErroRequisicao: String = '';

  constructor(
    private livrosService: LivrosService
  ) {}


  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.livrosService.listarTodos().subscribe({
      next: (livros: Livro[]) => {
        this.livros = livros;
      },
      error: (erro) => {
        this.mensagemErroRequisicao =
          'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erroRequisicao = true;
      },
    })
  }

}
