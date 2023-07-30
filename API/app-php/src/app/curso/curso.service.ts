import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable, throwError } from 'rxjs';
import { CursoInterface } from './curso-interface';

interface ApiResponse {
  cursos: Curso[];
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  // Local API URL for courses
  url = 'http://localhost:8080/API/php/';
  vetor: Curso[] = []; // Define the vetor array to store courses

  constructor(private http: HttpClient) {}

  // Obtain all courses
  obterCursos(): Observable<Curso[]> {
    return this.http.get<ApiResponse>(this.url + 'listar.php').pipe(
      map((res) => res.cursos),
      catchError((error) => {
        console.error('Error fetching courses:', error);
        return throwError('Something went wrong while fetching courses. Please try again later.');
      })
    );
  }

  // Cadastrar cursos (funcao+parametro+retorno)
  cadastrarCurso(c: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url + 'cadastrar.php', { cursos: c }).pipe(
      map((res) => {
        return res; // Return the response directly, assuming the server returns a single Curso object
      }),
      catchError((error) => {
        // Handle any errors here (if needed)
        console.error(error);
        return throwError('Something went wrong while trying to add a new course.');
      })
    );
  }
  
  //metodo para remover 
  removerCurso(c: Curso): Observable<Curso[]> {
    if (!c.idCurso) {
      console.error('Cannot remove course: idCurso is undefined.');
      return throwError('Invalid course data.');
    }
  
    const params = new HttpParams().set('idCurso', c.idCurso.toString());
    return this.http.delete<Curso[]>(this.url + 'excluir.php', { params }).pipe(
      map((res: any) => {
        // Assuming the server returns the updated list of courses after deletion
        return res; // Make sure the server returns the updated course list as an array of Curso
      }),
      catchError((error) => {
        console.error(error);
        return throwError('Something went wrong while trying to remove the course.');
      })
    );
  }
  
  }