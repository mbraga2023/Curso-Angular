import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  newCurso: Curso = {
    nomeCurso: '',
    valorCurso: 0
  };
  
  //vetor
  vetor:Curso[]=[];

  //objeto da classe Curso
  curso = new Curso();


  constructor (private curso_servico:CursoService){

  }
//inicializador
  ngOnInit(): void {
    //ao iniciar o sistema, devera listar os cursos
    this.selecao();
  }

//cadastro
cadastrarCurso(): void {
  this.curso_servico.cadastrarCurso(this.newCurso).subscribe(
    (addedCurso) => {
      // Handle the response here if needed
      console.log('Successfully added new course:', addedCurso);

      //limpar atributos
      this.newCurso.nomeCurso = " ";
      this.newCurso.valorCurso = 0;

      //atualizar listagem
      this.selecao();
    },
    (error) => {
      // Handle errors here if needed
      console.error('Error while adding a new course:', error);
    }
  );
  
}
  

//selecao
selecao(){
  this.curso_servico.obterCursos().subscribe(
    (res: Curso[])=>{
      this.vetor = res;
    }
  )

}

//alterar
alterar():void{
  alert("alterar");
}


removerCurso(curso: Curso) {
  this.curso_servico.removerCurso(curso).subscribe(
    () => {
      this.selecao(); // Update the cursos list after successful deletion
    },
    (error) => {
      console.error(error);
    }
  );
}


}