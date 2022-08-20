import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-erro-api',
  templateUrl: './message-erro-api.component.html',
  styleUrls: ['./message-erro-api.component.css']
})
export class MessageErroApiComponent implements OnInit {
  @Input() mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
