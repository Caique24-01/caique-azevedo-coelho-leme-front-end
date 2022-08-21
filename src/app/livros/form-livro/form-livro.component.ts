import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livro } from 'src/app/livro';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css']
})
export class FormLivroComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Livro>();
  @Input() btnText! : string

  livroForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.livroForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', [Validators.required]),
      anoLancamento: new FormControl('', [Validators.required]),
      autoresIds: new FormControl('', [Validators.required])
    })
  }

  get titulo() {
    return this.livroForm.get('titulo')!;
  }

  get anoLancamento() {
    return this.livroForm.get('anoLancamento')!;
  }

  get autoresIds() {
    return this.livroForm.get('autoresIds')!;
  }

  submit() {
    if (this.livroForm.invalid) {
      return;
    }
    var livro = this.livroForm.getRawValue() as Livro;

    var listaAutoresTexto = this.livroForm.get('autoresIds')?.value;
    var listaDeAutores = listaAutoresTexto.split(',');
    livro.autoresIds = listaDeAutores;

    this.onSubmit.emit(livro);
  }

}
