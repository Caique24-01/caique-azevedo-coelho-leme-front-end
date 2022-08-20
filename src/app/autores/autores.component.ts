import { Autor } from 'src/app/autor';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../services/autores-service.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  autores: Array<Autor> = new Array();

  erroRequisicao: Boolean = false;
  mensagemErroRequisicao: String = '';
  constructor(private autoresService: AutoresService) {}

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.autoresService.listarTodos().subscribe({
      next: (autores: Autor[]) => {
        this.autores = autores;
      },
      error: (erro) => {
        this.mensagemErroRequisicao =
          'Erro ao conectar com servidor, tente novamente mais tarde';
        this.erroRequisicao = true;
      },
    });
  }
}
