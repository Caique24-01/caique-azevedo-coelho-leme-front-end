import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Autor } from 'src/app/autor';

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css']
})
export class FormAutorComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Autor>();
  @Input() btnText! : string

  autorForm!: FormGroup;


  constructor(

  ) {}

  ngOnInit(): void {
    this.autorForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      biografia: new FormControl('', [Validators.required])
    })
  }

  get nome() {
    return this.autorForm.get('nome')!;
  }

  get biografia() {
    return this.autorForm.get('biografia')!;
  }

  submit() {
    if (this.autorForm.invalid) {
      return;
    }
    var autorNovo = this.autorForm.getRawValue() as Autor;
    this.onSubmit.emit(autorNovo);
  }

}
