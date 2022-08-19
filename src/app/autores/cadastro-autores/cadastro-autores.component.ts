import { Autor } from 'src/app/autor';
import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores-service.service';

@Component({
  selector: 'app-cadastro-autores',
  templateUrl: './cadastro-autores.component.html',
  styleUrls: ['./cadastro-autores.component.css']
})
export class CadastroAutoresComponent implements OnInit {
  btnText = "Cadastrar";

  autor!: Autor

  constructor(
    private autoresService: AutoresService
  ) { }

  ngOnInit(): void {
  }

  async createHandler(autor: Autor) {
    // const formData = new FormData();

    // formData.append('nome', autor.nome);
    // formData.append('biografia', autor.biografia);
    await this.autoresService.cadastrar(autor).subscribe();
  }
}
