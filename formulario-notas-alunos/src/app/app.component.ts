import { Component } from '@angular/core';


interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos: Aluno[] = [];

  addAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
}
