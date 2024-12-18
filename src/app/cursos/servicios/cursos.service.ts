import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfazCurso } from '../interfaces/interfaz-curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl= 'http://localhost:3000/cursos';

  constructor(private http:HttpClient) { }
  
  agregarCurso(curso:InterfazCurso):Observable<InterfazCurso>{
    return this.http.post<InterfazCurso>(this.apiUrl,curso);
  }

  obtenerCurso():Observable<InterfazCurso[]>{
    return this.http.get<InterfazCurso[]>(this.apiUrl);
  }
}
