import { MessagesService } from 'src/app/services/messages.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivrosService } from '../services/livros.service';
import { Router } from '@angular/router';

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
    private livrosService: LivrosService,
    public messagesService :MessagesService,
    private router: Router,
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

  async remover(id: number) {
    if (id) {
      await this.livrosService.removerLivro(id).subscribe();

      this.messagesService.add(`Livro excluído com sucesso!`);

      this.router.navigate(['/']);
    } else {
      this.mensagemErroRequisicao =
          'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erroRequisicao = true;
    }
  }

  confirmacao(id: number) {
    let text = "Tem certeza que deseja excluir o livro do id " + id;
    if (confirm(text) == true) {
      this.remover(id);
    } else {
      this.messagesService.add(`Operação cancelada`);

      this.router.navigate(['/livros']);
    }
  }

}
