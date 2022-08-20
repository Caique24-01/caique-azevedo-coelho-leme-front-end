import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from './../../services/messages.service';
import { Autor } from 'src/app/autor';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores-service.service';

declare function abreModal(id: string): any;

@Component({
  selector: 'app-cadastro-autores',
  templateUrl: './cadastro-autores.component.html',
  styleUrls: ['./cadastro-autores.component.css'],
})
export class CadastroAutoresComponent implements OnInit {
  btnText = 'Cadastrar';

  autor!: Autor;
  autorForm!: FormGroup;

  erro: Boolean = false;
  mensagemErro: String = '';

  constructor(
    private autoresService: AutoresService,
    public messagesService: MessagesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  async cadastrar(autor: Autor) {
    await this.autoresService.cadastrar(autor).subscribe({
      next: () => {
        this.messagesService.add('Autor adicionado com sucesso!');
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
