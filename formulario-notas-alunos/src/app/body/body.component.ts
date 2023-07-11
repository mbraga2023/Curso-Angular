import { Component, Input } from '@angular/core';

interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() alunos: Aluno[] = [];

  calcularMedia(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }

  verificarCondicao(nota1: number, nota2: number): string {
    const media = this.calcularMedia(nota1, nota2);
    return media >= 6 ? 'Aprovado' : 'Reprovado';
  }
  deleteAluno(aluno: Aluno) {
    const index = this.alunos.indexOf(aluno);
    if (index !== -1) {
      this.alunos.splice(index, 1);
    }
  }
  
  
}
