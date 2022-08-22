import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-remover-livro',
  templateUrl: './remover-livro.component.html',
  styleUrls: ['./remover-livro.component.css']
})
export class RemoverLivroComponent implements OnInit {

  constructor(
    private livrosServices: LivrosService,
  ) { }

  ngOnInit(): void {
  }

  remover() {
    this.livrosServices.removerLivro
  }

}
