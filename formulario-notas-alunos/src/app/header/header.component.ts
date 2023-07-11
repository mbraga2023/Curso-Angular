import { Component, EventEmitter, Output } from '@angular/core';

interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  aluno: Aluno = {
    nome: '',
    nota1: 0,
    nota2: 0
  };

  @Output() onSubmit: EventEmitter<Aluno> = new EventEmitter<Aluno>();

  submitForm() {
    if (this.aluno.nome && this.aluno.nota1 && this.aluno.nota2) {
      this.onSubmit.emit(this.aluno);
      this.aluno = {
        nome: '',
        nota1: 0,
        nota2: 0
      };
    }
  }
}
