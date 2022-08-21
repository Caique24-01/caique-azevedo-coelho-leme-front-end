import { Livro } from './../../livro';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.css']
})
export class CadastrarLivrosComponent implements OnInit {

  btnText = 'Cadastrar';

  erro: Boolean = false;
  mensagemErro: String = '';

  constructor(
    private livrosServices: LivrosService,
    public messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async cadastrar(livro: Livro) {

    await this.livrosServices.cadastrar(livro).subscribe({
      next: () => {
        this.messagesService.add('Livro adicionado com sucesso!');
        this.router.navigate(['/livros']);
      },
      error: (erro) => {
        if (erro.status == 400) {
          this.messagesService.add('Dados de cadastro incorreto');
        } else {
          this.mensagemErro =
            'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erro = true;
        }
      },
    });
  }

}
