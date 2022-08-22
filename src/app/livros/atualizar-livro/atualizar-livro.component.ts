import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/livro';
import { LivrosService } from 'src/app/services/livros.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-atualizar-livro',
  templateUrl: './atualizar-livro.component.html',
  styleUrls: ['./atualizar-livro.component.css']
})
export class AtualizarLivroComponent implements OnInit {
  btnText: string = 'Editar';

  livro!: Livro;

  erro: Boolean = false;
  mensagemErro: String = '';


  constructor(
    private livrosService: LivrosService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.livrosService.getLivro(id).subscribe((item) => {
      this.livro = item;
      console.log(this.livro);
    })
  }

  async editar(livroData: Livro) {
    const id = this.livro.id;

    await this.livrosService.editarLivro(id, livroData).subscribe({
      next: () => {
        this.messagesService.add('Livro atualizado com sucesso!');
        this.router.navigate(['/livros']);
      },
      error: (erro) => {
        if (erro.status >= 400) {
          this.messagesService.add('Dados incorretos');
        } else {
          this.mensagemErro =
            'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erro = true;
        }
      },
    });
  }
}
