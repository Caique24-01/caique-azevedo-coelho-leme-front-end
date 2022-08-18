import { AutoresService } from './autores.service';
import { Autor } from 'src/app/autor';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores: Array<Autor> = new Array();

  error: string = "";
  constructor(
    private autoresService: AutoresService
  ) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.autoresService.listarTodos().subscribe((autores: Autor[]) => {
      this.autores = autores;
    }, error => {
      this.error = "Estamos com problema no servidor, tente novamente mais tarde!"
    });
  }

}
