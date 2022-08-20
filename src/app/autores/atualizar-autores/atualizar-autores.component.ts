import { MessagesService } from './../../services/messages.service';
import { Autor } from 'src/app/autor';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-autores',
  templateUrl: './atualizar-autores.component.html',
  styleUrls: ['./atualizar-autores.component.css']
})
export class AtualizarAutoresComponent implements OnInit {
  btnText: string = 'Editar';

  autor!: Autor;

  erro: Boolean = false;
  mensagemErro: String = '';

  constructor(
    private autoresService: AutoresService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.autoresService.getAutor(id).subscribe((item) => {
      this.autor = item;
      console.log(this.autor);
    })
  }

  async editar(autorData: Autor) {
    const id = this.autor.id;

    await this.autoresService.editarAutor(id, autorData).subscribe({
      next: () => {
        this.messagesService.add('Autor atualizado com sucesso!');
        this.router.navigate(['/autores']);
      },
      error: (erro) => {
        if (erro.status == 400) {
          this.messagesService.add('Autor já cadastrado');
        } else {
          this.mensagemErro =
            'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erro = true;
        }
      },
    });
  }

}
